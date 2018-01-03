export const getProducts = (filters) => {
  return new Promise(async(resolve, reject) => {
    const response = await fetch('/api/products', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        filters: filters
      })
    })
    resolve(await response.json())
  }) 
}