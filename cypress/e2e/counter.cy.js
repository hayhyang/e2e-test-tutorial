// - [x] counter의 초기값은 0이다.
// - [x] + 버튼을 클릭 시 count가 1증가한다.
// - [x] - 버튼을 클릭 시 count가 1감소한다.
// - [ ] + 버튼을 클릭 시 count가 10이 넘는 경우 더이상 증가하지 못한다. (Max 값이 10)
// - [ ] - 버튼을 클릭 시 count가 0보다 작아지는 경우 감소하지 못한다. (Min 값이 0)
// - [ ] reset 버튼을 클릭 시 counter가 0으로 초기화된다.

// describe: 테스트 단위를 묶어주는 함수
describe("example counter app", () => {
  // 하나의 테스트코드를 실행하기전 실행하는 함수
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/index.html")
  })

  // 하나의 테스트코드
  it("counter의 초기값은 0이다.", () => {
    // get: querySelector를 가져온다
    // invoke: element의 innerHTML text를 가져온다
    // should: ~ 해야한다
    cy.get('#value').invoke("text").should("eq", "0")
  })

  it("+ 버튼을 클릭 시 count가 1증가한다.", () => {
    // 먼저 기존 값을 가져온다.
    // + 버튼을 클릭한다.
    // 변화된 값이 기존값 +1인지 체크한다.
    cy.get('#value')
    .invoke("text")
    .then(value => {
      const preValue = Number(value)
      cy.get(".increase-btn").click()
      cy.get('#value')
      .invoke("text")
      .should("eq", String(preValue + 1))
    })
  })

  it("- 버튼을 클릭 시 count가 1감소한다.", () => {
    // + 버튼을 클릭해서 값을 1로 만든다.
    cy.get(".increase-btn").click()
    cy.get('#value')
    .invoke("text")
    .then(value => {
      cy.get(".decrease-btn").click()
      const preValue = Number(value)
      cy.get("#value")
      .invoke("text")
      .should('eq', String(preValue - 1))
    })
  })

  it("+ 버튼을 클릭 시 count가 10이 넘는 경우 더이상 증가하지 못한다. (Max 값이 10)", () => {
    for(let i = 0; i < 11; i++) {
      cy.get(".increase-btn").click()
    }
    cy.get('#value').invoke("text").should('eq', '10')
  })

  it("- 버튼을 클릭 시 count가 0보다 작아지는 경우 감소하지 못한다. (Min 값이 0)", () => {
    cy.get(".decrease-btn").click()
    cy.get('#value').invoke("text").should('eq', '0')
  })
})