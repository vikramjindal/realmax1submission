import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  success: boolean;
  message: string;
  envCheck: {
    apiKeyPresent: boolean;
    apiKeyLength?: number;
    apiUrlPresent: boolean;
    apiUrl?: string;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Get API credentials from environment variables
  const apiKey = process.env.FOLLOWUPBOSS_API_KEY;
  const apiUrl = process.env.FOLLOWUPBOSS_API_URL;

  const envCheck = {
    apiKeyPresent: !!apiKey,
    apiKeyLength: apiKey ? apiKey.length : undefined,
    apiUrlPresent: !!apiUrl,
    apiUrl: apiUrl || 'Not set (will use default)',
  };

  const allGood = envCheck.apiKeyPresent;

  return res.status(200).json({
    success: allGood,
    message: allGood 
      ? 'Environment variables are properly configured!' 
      : 'Environment variables are missing. Please check your .env file.',
    envCheck,
  });
}

