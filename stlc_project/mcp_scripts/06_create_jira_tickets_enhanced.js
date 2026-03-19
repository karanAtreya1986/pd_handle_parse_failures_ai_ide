/**
 * STLC Pipeline - Step 6: Enhanced Jira Ticket Creation
 * 
 * Creates Jira tickets for each failed test case with:
 * 1. Different priorities based on test category
 * 2. Custom date-based labels
 */

const path = require('path');
const JiraClient = require(path.join(__dirname, '..', 'jira_mock', 'jira_client'));
const config = require(path.join(__dirname, '..', 'config', 'project_config.js'));

/**
 * Determine priority based on test title/category
 * @param {string} title 
 * @returns {string} Jira priority
 */
function getPriority(title) {
  const lowercaseTitle = title.toLowerCase();
  
  if (lowercaseTitle.includes('login') || lowercaseTitle.includes('auth')) {
    return 'Highest';
  } else if (lowercaseTitle.includes('broken') || lowercaseTitle.includes('navigat') || lowercaseTitle.includes('input')) {
    return 'High';
  } else if (lowercaseTitle.includes('timeout') || lowercaseTitle.includes('visual')) {
    return 'Medium';
  }
  return 'Low';
}

/**
 * Create enhanced Jira tickets for test failures
 * @param {Array} failures - Array of failure objects
 * @returns {Promise<Array>} Array of created ticket keys
 */
async function createEnhancedTickets(failures) {
  console.log('\n--- Step 6: Creating Enhanced Jira Tickets ---\n');

  if (!failures || failures.length === 0) {
    console.log('  No failures found. No tickets to create.');
    return [];
  }

  const client = new JiraClient({
    baseURL: config.jira.baseURL,
    projectKey: config.jira.projectKey,
    email: config.jira.email,
    apiToken: config.jira.apiToken,
  });

  const healthy = await client.isHealthy();
  if (!healthy) {
    console.log('  WARNING: Jira server is not reachable.');
    return [];
  }

  const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  const dateLabel = `run-${currentDate}`;
  const createdTickets = [];

  for (const failure of failures) {
    const priority = getPriority(failure.title);
    const summary = `[${priority}] Test Failure: ${failure.title}`;
    
    const description = [
      `*Automated Test Failure Report (Enhanced)*`,
      ``,
      `*Priority:* ${priority}`,
      `*Test:* ${failure.title}`,
      `*File:* ${failure.file}`,
      `*Duration:* ${failure.duration}ms`,
      ``,
      `*Error Detail:*`,
      `{code}`,
      failure.error,
      `{code}`,
      ``,
      `*Reported by:* Enhanced STLC Pipeline Tool`,
    ].join('\n');

    try {
      const ticket = await client.createIssue(
        summary,
        description,
        'Bug',
        priority,
        ['automation', 'stlc-enhanced', dateLabel]
      );
      createdTickets.push(ticket.key);
      console.log(`  Created: ${ticket.key} [Priority: ${priority}] - ${summary}`);
    } catch (error) {
      console.log(`  ERROR creating ticket for "${failure.title}": ${error.message}`);
    }
  }

  console.log(`\n  Total enhanced tickets created: ${createdTickets.length}`);
  return createdTickets;
}

// Module execution (Demo Mode)
if (require.main === module) {
  const demoFailures = [
    { title: 'TC-005: Login Authentication Failure', file: '05_login_valid.spec.js', error: 'Authentication timeout', duration: 3500 },
    { title: 'TC-007: Broken Link Detected', file: '07_broken_link.spec.js', error: '404 Link found', duration: 1500 },
    { title: 'TC-010: Visual Regression', file: '10_visual_check.spec.js', error: 'Screenshot mismatch by 5%', duration: 4200 }
  ];
  createEnhancedTickets(demoFailures);
}

module.exports = { createEnhancedTickets };
