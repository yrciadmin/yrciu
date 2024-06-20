import mailchimp from '@mailchimp/mailchimp_transactional';

export const mailchimpClient = mailchimp(process.env.MAILCHIMP_API_KEY as string);
