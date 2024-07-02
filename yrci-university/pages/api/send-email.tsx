import type { NextApiRequest, NextApiResponse } from 'next';
import mailchimp from '@mailchimp/mailchimp_transactional';

const mailchimpClient = mailchimp(process.env.MAILCHIMP_API_KEY as string);
import type { MessagesSendRequest, MessageRecipientType } from '@mailchimp/mailchimp_transactional';

interface RequestBody {
  firstName: string;
  lastName: string;
  email: string;
  employer: string;
  groupRates: boolean;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, employer, groupRates }: RequestBody = req.body;

    const message: MessagesSendRequest['message'] = {
      from_email: process.env.YRCI_UNIVERSITY_EMAIL, // Use a verified email address
      subject: `New contact request from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Employer: ${employer}
        Group rates: ${groupRates ? 'Yes' : 'No'}
      `,     
       to: [
        {
          email: process.env.YRCI_UNIVERSITY_EMAIL as string,
          type: 'to' as MessageRecipientType,
        },
      ],
    };

    try {
      const response = await mailchimpClient.messages.send({ message });
      res.status(200).json({ success: true, result: response });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ success: false, error: error.message });
      } else {
        res.status(500).json({ success: false, error: 'An unknown error occurred' });
      }
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
