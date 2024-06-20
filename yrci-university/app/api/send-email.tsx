import type { NextApiRequest, NextApiResponse } from 'next';
import { mailchimpClient } from '../lib/mailchimp';
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
console.log("sending")
    const message: MessagesSendRequest['message'] = {
      from_email: `${email}`, // Your email address
      subject: `New contact request from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Employer: ${employer}
        Group rates: ${groupRates ? 'Yes' : 'No'}
      `,
      to: [
        {
          email: 'lpresident@yrci.com',
          type: 'to' as MessageRecipientType,
        },
      ],
    };

    try {
      const response = await mailchimpClient.messages.send({ message });
      console.log("res", res)
      res.status(200).json({ success: true, result: response });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ success: false, error: error.message });
        console.log("error", error.message)

      } else {
        res.status(500).json({ success: false, error: 'An unknown error occurred' });
      }
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
