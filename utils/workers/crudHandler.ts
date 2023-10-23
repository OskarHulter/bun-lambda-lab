async function createAirtableRecord(env, body) {
  try {
    const result = fetch(`https://api.airtable.com/v0/${env.AIRTABLE_BASE_ID}/${encodeURIComponent(env.AIRTABLE_TABLE_NAME)}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        Authorization: `Bearer ${env.AIRTABLE_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      }
    })
    return result
  } catch (error) {
    console.error(error)
  }
}

// Existing code
// async function submitHandler
// export default ...
