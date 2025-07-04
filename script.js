    function objClick(element) {
      const blogContainer = element.parentElement;
      const content = blogContainer.querySelector(".onclick-border");
      content.classList.toggle("show");
    }