import { NextResponse } from 'next/server'
import puppeteer from 'puppeteer'

export async function POST(req: Request) {
  const { code } = await req.json()

  const browser = await puppeteer.launch({
    headless: true,
  })

  const page = await browser.newPage()

  await page.goto(`http://localhost:3000/gen-cv/${code}`, {
    waitUntil: 'networkidle0',
  })

  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
  })

  await browser.close()

  return new NextResponse(Buffer.from(pdfBuffer), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="cv.pdf"',
    },
  })
}
