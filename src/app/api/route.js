import Contact from "@/config/Contact";
import connectToDb from "@/config/db";
import { transporter } from "@/config/nodemailer";
import { NextRequest, NextResponse } from "next/server";

const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  email: "Email",
  phone: "Phone Number",
  // topic: "Topic",
  message: "Schedule Meeting",
  query:"Query"
};

const generateEmailContent = (data) => {
  const { name, message } = data; // Extract name and meeting link from the data

  // Create the text version of the email
  const stringData = `Dear ${name},\n\nI hope this email finds you in great spirits. Thank you for reaching out through our website, "www.targetgreencard.com."

I'm reaching out from EB1 Next Level Program, where we specialize in providing comprehensive support for individuals applying for the EB1A visa category. Our services are meticulously designed to strengthen your application through strategic evidence creation.

At EB1 Next Level Program, we understand the nuances of the EB1A application process and offer a range of services tailored to showcase your extraordinary abilities and achievements. Here’s a brief overview of the services we provide, each aimed at enhancing the compelling nature of your application:

1. **Article Writing and Publication**: Our team of expert writers and editors can craft and publish articles that highlight your professional expertise and contributions to your field.

2. **Citation Generation**: We assist in increasing the citation count of your existing publications, thereby demonstrating the impact and recognition of your work within the scholarly community.

3. **Peer Review Opportunities**: Engage in peer review processes for reputable journals, underscoring your recognition as an authority in your field.

4. **Editorial Board Membership**: We can facilitate placements on editorial boards, showcasing your leadership and influence in your academic or professional specialty.

5. **Press Releases**: Our team can coordinate press releases to amplify significant achievements, further proving your widespread acclaim.

6. **Book Writing and Publishing on Amazon**: From conceptualization to publication, we guide you through authoring a book that reflects your knowledge and expertise, published directly to Amazon.

7. **Writing of the Petition for EB1A**: We craft compelling narratives for your petition, encapsulating your professional narrative and arguing persuasively for your eligibility.

In addition to these services, we also provide training to help enhance your profile and ensure you fully understand the EB1 process requirements.

Each service is priced individually, allowing you the flexibility to choose options that best meet your specific needs and budget. We are committed to providing you with personalized support to enhance your application's strength.

To make scheduling as convenient as possible, we have provided a Calendly link below where you can choose a time that best fits your schedule. Please note that there is a fee for this meeting.

Schedule Your Meeting: ${message}

Thank you for considering the EB1 Next Level Program as your partner in this important endeavor. I look forward to the opportunity to discuss how we can support your application further.

Warm regards,

Team EB1 Next Level Program
http://www.targetgreencard.com`;

  // Create the HTML version of the email with full-width content
  const htmlData = `
  <!DOCTYPE html>
  <html>
  <head>
    <title></title>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <style type="text/css">
      body, table, td, a {-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}
      table {border-collapse: collapse !important; width: 100%;}
      body {margin: 0 !important; padding: 0 !important; width: 100% !important;}
      @media screen and (max-width: 525px) {
        .wrapper {width: 100% !important; max-width: 100% !important;}
        .responsive-table {width: 100% !important;}
        .padding {padding: 10px 5% 15px 5% !important;}
        .section-padding {padding: 0 15px 50px 15px !important;}
      }
      .form-heading {color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}
      .form-answer {color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}
      div[style*="margin: 16px 0;"] {margin: 0 !important;}
    </style>
  </head>
  <body style="margin: 0 !important; padding: 0 !important; background: #fff;">
    <table border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td>
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 100%;">
            <tr>
              <td style="padding: 0 15px; font-size: 16px; line-height: 25px; color: #232323;">
                <p>Dear ${name},</p>
                <p>I hope this email finds you in great spirits. Thank you for reaching out through our website, "www.targetgreencard.com."</p>
                <p>I'm reaching out from <b>EB1 Next Level Program</b>, where we specialize in providing comprehensive support for individuals applying for the EB1A visa category. Our services are meticulously designed to strengthen your application through strategic evidence creation.</p>
                <p>At <strong>EB1 Next Level Program</strong>, we understand the nuances of the EB1A application process and offer a range of services tailored to showcase your extraordinary abilities and achievements. Here’s a brief overview of the services we provide, each aimed at enhancing the compelling nature of your application:</p>
                <ul>
                  <li><strong>Article Writing and Publication:</strong> Our team of expert writers and editors can craft and publish articles that highlight your professional expertise and contributions to your field.</li>
                  <li><strong>Citation Generation:</strong> We assist in increasing the citation count of your existing publications, thereby demonstrating the impact and recognition of your work within the scholarly community.</li>
                  <li><strong>Peer Review Opportunities:</strong> Engage in peer review processes for reputable journals, underscoring your recognition as an authority in your field.</li>
                  <li><strong>Editorial Board Membership:</strong> We can facilitate placements on editorial boards, showcasing your leadership and influence in your academic or professional specialty.</li>
                  <li><strong>Press Releases:</strong> Our team can coordinate press releases to amplify significant achievements, further proving your widespread acclaim.</li>
                  <li><strong>Book Writing and Publishing on Amazon:</strong> From conceptualization to publication, we guide you through authoring a book that reflects your knowledge and expertise, published directly to Amazon.</li>
                  <li><strong>Writing of the Petition for EB1A:</strong> We craft compelling narratives for your petition, encapsulating your professional narrative and arguing persuasively for your eligibility.</li>
                </ul>
                <p>In addition to these services, we also provide training to help enhance your profile and ensure you fully understand the EB1 process requirements.</p>
                <p>Each service is priced individually, allowing you the flexibility to choose options that best meet your specific needs and budget. We are committed to providing you with personalized support to enhance your application's strength.</p>
                <p>To make scheduling as convenient as possible, we've provided a Calendly link below where you can select a time that best suits your availability. Please note that a nominal fee applies to this meeting, which will be credited towards any services you choose to proceed with.</p>
                <p><a href="${message}" target="_blank">Schedule Your Meeting</a></p>
                <p>Thank you for considering the <strong>EB1 Next Level Program</strong> as your partner in this important endeavor. I look forward to the opportunity to discuss how we can support your application further.</p>
                <p>Warm regards,</p>
                <p>Team <strong>EB1 Next Level Program</strong></p>
                <p><a href="http://www.targetgreencard.com" target="_blank">http://www.targetgreencard.com</a></p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>`;

  return {
    text: stringData,
    html: htmlData
  };
};


export async function POST(request) {
  await connectToDb();
  const data = await request.json();
  // console.log(data)
  const { name, email, phone } = data;
  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    cc: 'info@targetgreencard.com', // Add CC address here
  };
  try {
    const newContact = new Contact(data);
    await transporter.sendMail({
      ...mailOptions,
      ...generateEmailContent(data),
      subject: "Enhance Your EB1A Application with Our Tailored Evidence-Creation Services",
      // html:'<h1>hghgh</h1><p></p>'
    });
    await newContact.save();
    return NextResponse.json({ success: true });
  } catch (err) {
    // console.log(err);
    return NextResponse.json({ message: err.message });
  }
}
