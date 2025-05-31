const { execSync } = require('child_process');

const fnName = process.argv[2];

if (!fnName) {
  console.error('❌ Please provide a function name.\nUsage: npm run deploy-fn -- <function-name>');
  process.exit(1);
}

const cmd = `supabase functions deploy ${fnName} --no-verify-jwt`;

console.log(`🚀 Deploying function: ${fnName}`);
execSync(cmd, { stdio: 'inherit' });
