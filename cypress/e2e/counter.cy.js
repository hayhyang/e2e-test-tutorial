// describe: 테스트 단위를 묶어주는 함수
describe("example counter app", () => {
    // 하나의 테스트코드를 실행하기전 실행하는 함수
    beforeEach(() => {
        cy.visit("http://127.0.0.1:5500/index.html")
    })

    // 하나의 테스트코드
    it("최초에 카운터 값을 0으로 보여준다", () => {
        // get: querySelector를 가져온다
        // invoke: element의 innerHTML text를 가져온다
        // should: ~ 해야한다
        cy.get('#value').invoke("text").should("eq", "0")
    })
})