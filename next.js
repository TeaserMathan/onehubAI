import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium-min';

export default async function handler(req, res) {
  try {
    const browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });

    const page = await browser.newPage();
    await page.goto('https://example.com/jobs', { waitUntil: 'networkidle2' });

    const data = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('h2')).map(el => el.innerText);
    });

    await browser.close();
    res.status(200).json({ jobs: data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to scrape data' });
  }
}
