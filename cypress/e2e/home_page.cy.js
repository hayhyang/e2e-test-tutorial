describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");

    // as
    // 대상을 as(aliasName, options(object)) 로 할당하면
    // 참조한 값을 cy.get(), cy.wait()에서 @ prefix로 가져와 사용할 수 있다.
    // options
    // - query(default): alias요청때마다 결과 값으로 이어지는 모든 쿼리를 다시 실행
    // - static: alias가 저장될 때 한번 검색되며 변경되지 않는다.
    cy.get("button[type=submit]").as("submitBtn");
    cy.get("@submitBtn").click();

    // children
    // 돔 엘리먼트의 자식 엘리먼트를 가져온다.
    cy.get(".nav ul").children().should("have.length", 3);

    // closest
    // 지정한 돔 엘리먼트의 첫번째 요소를 가져온다.
    cy.get(".nav ul li").closest("li");

    // contains
    // 텍스트를 포함한 돔 엘리먼트를 가져온다.
    cy.get("li").contains("Home");

    // eq
    // 특정 index 요소를 가져온다.
    cy.get("li").eq(0).should("have.text", "Home");
  });
});
