import Airtable from 'airtable';
import { NextResponse } from 'next/server';

// Initialize Airtable with API key (from environment variables)
const airtableApiKey = process.env.AIRTABLE_API_KEY;
const airtableBaseId = process.env.AIRTABLE_BASE_ID || 'appsytBlcFfSlxHHU';
const airtableTableName = process.env.AIRTABLE_TABLE_NAME || 'Entries';

export async function POST(request: Request) {
  try {
    // Configure Airtable
    if (!airtableApiKey) {
      return NextResponse.json(
        { error: 'Airtable API key is not configured' },
        { status: 500 }
      );
    }

    const base = new Airtable({ apiKey: airtableApiKey }).base(airtableBaseId);
    
    // Parse the request body
    const data = await request.json();
    const { name, company, email, phone } = data;
    
    // Validate the required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required fields' },
        { status: 400 }
      );
    }
    
    // Create record in Airtable
    const record = await base(airtableTableName).create([
      {
        fields: {
          Name: name,
          Company: company || "",
          Email: email,
          Phone: phone || ""
        }
      }
    ]);
    
    // Return success response
    return NextResponse.json({ 
      success: true, 
      message: 'Successfully added to waitlist',
      record: record
    });
    
  } catch (error) {
    console.error('Error creating waitlist entry:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to create waitlist entry',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
} 