export const getProducts = () => {
  return new Promise(async(resolve, reject) => {
    const response = await fetch('/api/products')
    resolve(await response.json())
  }) 
}