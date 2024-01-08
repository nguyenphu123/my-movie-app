const BASE_URL = 'https://api.themoviedb.org/3'

const headers = {
  Authorization: 'bearer ' + process.env.TMDB_API_READ_ACCESS_TOKEN
}
it('GET API testing Using Cypress API Plugin', () => {
  cy.request({
    method: 'GET',
    url: BASE_URL,
    headers: headers
  }).then(response => {
    //Expecting the response status code to be 200
    expect(response.status).to.eq(204)
  })
})
