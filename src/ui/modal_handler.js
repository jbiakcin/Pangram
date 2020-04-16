const ModalHandler = {

  toggleRulesModal(rulesModal) {
    debugger;
    if (rulesModal.class === "modal") {
      rulesModal.class = "modal hidden";
    } else {
      rulesModal.class = "modal"
    }
  }
}

module.exports = ModalHandler;
