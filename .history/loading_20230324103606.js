 function onEnter(event) {
    progressContainer.classList.remove("hide");
    progressContainer.classList.add("show");
    progressElement.style.width = 0;
    progressElement.classList.remove("finish");
  }
  
 function onProgress(event) {
    progress = (event.progress.loaded / event.progress.total) * 100;
    progressElement.style.width = progress + "%";
    if (progress === 100) {
      progressElement.classList.add("finish");
      setTimeout(function () {
        hideLoading();
      }, 500);
    }
  }

const hideLoading = () => {
  progressContainer.classList.remove("show");
  progressContainer.classList.add("hide");
};

function foo() {
    console.log('Hello from foo!');
  }
  
module.exports = onEnter;
module.exports = onProgress;