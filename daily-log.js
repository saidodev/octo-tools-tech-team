import * as dotenv from 'dotenv'
import { Octokit, App } from "octokit";
import dayjs from 'dayjs' 
import strdate from './ignore.cjs'

dotenv.config()

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({ auth: process.env.PERSONAL_TOKEN });


const org = "saidodev";
const team_slug = "saisai";
const title = `Daily Log | ${dayjs().format("dddd d MMM, YYYY")}`;
const body = `
${strdate.str_format}

format:
\`\`\`
**What have you done today?**

- 

**What will you do tomorrow?**

- 

**Any blocker?**

- 
\`\`\` `;

await octokit.rest.teams.createDiscussionInOrg({
    org,
    team_slug,
    title,
    body,
});