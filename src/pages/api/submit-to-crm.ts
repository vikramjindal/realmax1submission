import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  success: boolean;
  message: string;
  data?: any;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed' 
    });
  }

  try {
    const { 
      fullName, 
      phoneNumber, 
      email, 
      experienceLevel, 
      currentBrokerage, 
      switchTiming, 
      notes 
    } = req.body;

    // Validate required fields
    if (!fullName || !phoneNumber || !email || !experienceLevel || !switchTiming) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required fields' 
      });
    }

    // Split full name into first and last name
    const nameParts = fullName.trim().split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ') || firstName;

    // Prepare data for FollowUpBoss API
    // Using minimal required fields only
    const followUpBossData = {
      firstName: firstName,
      lastName: lastName,
      emails: [
        {
          value: email
        }
      ],
      phones: [
        {
          value: phoneNumber
        }
      ],
      source: 'Website - Remax'
    };

    console.log('Payload to send:', JSON.stringify(followUpBossData, null, 2));

    // Get API credentials from environment variables
    const apiKey = process.env.FOLLOWUPBOSS_API_KEY;
    const apiUrl = process.env.FOLLOWUPBOSS_API_URL || 'https://api.followupboss.com/v1';

    if (!apiKey) {
      console.error('FollowUpBoss API key is not configured');
      return res.status(500).json({ 
        success: false, 
        message: 'CRM integration is not properly configured',
        error: 'FOLLOWUPBOSS_API_KEY environment variable is missing'
      });
    }

    console.log('Sending to FollowUpBoss API:', apiUrl);
    console.log('API Key present:', apiKey ? 'Yes (length: ' + apiKey.length + ')' : 'No');

    // Send to FollowUpBoss API
    const response = await fetch(`${apiUrl}/people`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(apiKey + ':').toString('base64')}`
      },
      body: JSON.stringify(followUpBossData)
    });

    const responseText = await response.text();
    console.log('FollowUpBoss API response status:', response.status);
    console.log('FollowUpBoss API response:', responseText);

    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch (e) {
      responseData = { message: responseText };
    }

    if (!response.ok) {
      console.error('FollowUpBoss API error:', responseData);
      return res.status(response.status).json({ 
        success: false, 
        message: 'Failed to submit to CRM',
        error: responseData.message || responseData.error || JSON.stringify(responseData) || 'Unknown error from FollowUpBoss API'
      });
    }

    console.log('Person created successfully:', responseData);

    // TODO: Add note/event creation later after confirming person creation works
    // For now, just log the form details
    console.log('Form Details - Experience:', experienceLevel, '| Brokerage:', currentBrokerage, '| Switch Timing:', switchTiming, '| Notes:', notes);

    // Success response
    return res.status(200).json({ 
      success: true, 
      message: 'Successfully submitted to CRM',
      data: responseData
    });

  } catch (error) {
    console.error('Error submitting to CRM:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

