import createFullGrid from './'


describe('createFullgrid', () => {
  it ('create 9x9 gird with value range 1 to 9', () => {
      const grid = createFullGrid()
      for(let row in grid) 
            for(let col in grid[row]) {
                expect(grid[row][col]).toBeGreaterThanOrEqual(1)
                expect(grid[row][col]).toBeLessThanOrEqual(9)
            }
  })
})
