import * as dotenv from 'dotenv'
import { Octokit, App } from "octokit";
import dayjs from 'dayjs' 
import strdate from './string-date.cjs'
import config from './config.cjs'

dotenv.config()

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({ auth: process.env.PERSONAL_TOKEN });


const org = config.github_org;
const team_slug = config.team_slug;
const card_title = config.card_title;
const title = `${card_title} | ${strdate.clean_today}`;
// strdate.day 0: Sunday , 6:
const is_tgif = strdate.day == 5 ? 'Have a nice weekend~~~! 🏖😎🎮🍦🛌🕺🏼💃🏼!' : '';
const isit_monday = strdate.day == 1 ? `\n**How was your weekend?**\n <!-- Rate with emoji! --> 😊😊😊😊😊 ` : '';
const body = `
${strdate.week_progress}

${is_tgif}

format:
\`\`\`
**What have you done today?**

- 

**What will you do tomorrow?**

- 

**Any blocker?**

- 
${isit_monday}
\`\`\` `;

await octokit.request('POST /orgs/{org}/teams/{team_slug}/discussions', {
    org: org,
    team_slug: team_slug,
    title: title,
    body: body
})