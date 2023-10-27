/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("console.log('file 1');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/burger.js":
/*!*********************************!*\
  !*** ./src/assets/js/burger.js ***!
  \*********************************/
/***/ (function() {

eval("(function(){\n    var burger = document.querySelector('#navmenu'),\n        header = document.querySelector('.header'),\n        headerMenu = document.getElementById('headermenu'),\n        lastHaveChild,\n        boody = document.querySelector('body');\n \n    burger.onclick = function() {\n        header.classList.toggle('menu-opened');\n        boody.classList.toggle('no-scroll');\n    }\n    headerMenu.addEventListener('click', (e) => {\n        const parentItem = e.target.parentNode;\n     //    console.log(parentItem);\n      if(!parentItem.classList.contains('menu-item-has-children')){\n        header.classList.remove('menu-opened');\n        boody.classList.remove('no-scroll');\n       // console.log('33444')\n      \n        if ((lastHaveChild) && (lastHaveChild.classList.contains('active'))) \n        {\n            lastHaveChild.classList.remove('active');\n            lastHaveChild = null;\n        }\n         \n      }  else{\n      //  console.log('FUCK U');\n        parentItem.classList.toggle('active');\n   \n        lastHaveChild = parentItem;\n       // console.log(lastHaveChild);\n      }\n  \n     })\n    window.addEventListener('scroll', function() {\n       \n        if ((lastHaveChild) && (lastHaveChild.classList.contains('active'))) \n        {\n            lastHaveChild.classList.remove('active');\n            lastHaveChild = null;\n        }\n    });\n\n}());\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/burger.js?");

/***/ }),

/***/ "./src/assets/js/faq.js":
/*!******************************!*\
  !*** ./src/assets/js/faq.js ***!
  \******************************/
/***/ (function() {

eval("document.addEventListener(\"DOMContentLoaded\", function() {\n \n\tlet faqqs = document.querySelectorAll('.faqq__head');\t\n\tlet faqNum = faqqs.length; //get number of questions in the FAQ\n\tlet numOpen = 0; //nuber of faq answers that are open\n\t\n\tfor (let faqq of faqqs) {\n\t\tfaqq.setAttribute( 'role', 'button');\t\t\t\n\t\t//faqq.setAttribute( 'aria-expanded', 'false');\n\t\t//faqq.setAttribute( 'aria-pressed', 'false');\n\t\t\n    \t\tlet faqa = faqq.parentNode.querySelector('div.faqq__answer');\n\t\t\t\n\t\tlet faqaStyles = {\n\t\t\tposition: 'absolute',\n\t\t\twillChange: 'transform',\n\t\t\ttransition: 'transform ease-in-out 0.5s'\n\n\t\t};\t\t\n\t\t\n\t\t// apply styles to the wrapper\n\t\tObject.assign(faqa.style, faqaStyles);\t\t\n\t\t\n\t\t// create wrapper container\n\t\tlet wrapper = document.createElement('span');\n\n\t\t// insert wrapper before faqa in the DOM tree\n\t\tfaqa.parentNode.insertBefore(wrapper, faqa);\n\n\t\t// move faqa into wrapper\n\t\twrapper.appendChild(faqa);\n\t\t\n\t\twrapper.setAttribute( 'aria-hidden', 'true' );\n\t\twrapper.classList.add(\"wrapper\");\n\t\t\t\n\t\tlet wrapperStyles = {\n\t\t\tdisplay: 'block',\n\t\t\twidth: '100%',\n\t\t\tposition: 'relative',\n\t\t\toverflow: 'hidden',\n\t\t\theight: '0px',\n\t\t\topacity: '0',\n\t\t\twillChange: 'opacity, height',\n\t\t\ttransition: 'height ease-in-out 0.5s, opacity ease-in-out 1s'\n\n\t\t};\n\t\t\n\t\t// apply styles to the wrapper\n\t\tObject.assign(wrapper.style, wrapperStyles);\t\n\n\t\t\n\t\tfaqq.addEventListener('keydown', function(e) {\t\n\t\t\t//allow for proper aria keydown events\t\t\t\t\t\t\t\t\n\t\t\t//https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role\n\n\t\t\tif (e.key === \" \" || event.key === \"Enter\" || event.key === \"Spacebar\") { // \"Spacebar\" for IE11 support\n\t\t\t\te.preventDefault();\n\t\t\t\te.stopPropagation();\n\t\t\t\tfaqq.click();\n\t\t\t}\t\t\t\n\t\t\n\t\t});//faqq.addEventListener('keydown')\n\t\t\n\t\t\n\t\tfaqq.addEventListener('click', function(e) {\n\t\t\te.preventDefault();\n\t\t\te.stopPropagation();\n\n\t\t\tif (wrapper.style.height != '0px') { //collapse answer\n\t\t\t\twrapper.style.height = '0px';\t\t\n\t\t\t\twrapper.style.opacity = '0';\t\n\t\t\t\twrapper.style.transition = 'height ease-in-out 0.5s, opacity ease-in-out .375s';\t\t\t\t\t\n\t\t\t//\twrapper.setAttribute( 'aria-hidden', 'true');\t\t\t\n\t\t\t//\tfaqq.setAttribute( 'aria-expanded', 'false');\n\t\t\t//\tfaqq.setAttribute( 'aria-pressed', 'false');\n\t\t\t\tfaqa.style.transform = 'translateY(-100%)';\n\t\t\t\t\n\t\t\t\tif ( numOpen > 0 ) {\n\t\t\t\t\tnumOpen--;\n\t\t\t\t} \n\t\t\t\t\n\t\t\t\tif ( numOpen == 0) {\n\t\t\t\t//\tfaqToggle.setAttribute( 'aria-expanded', 'false' );\n\t\t\t\t//\tfaqToggle.setAttribute( 'aria-pressed', 'false' );\n\t\t\t\t//\tfaqToggle.innerHTML = 'Open All Answers';\n\t\t\t\t//\tfaqToggleMsg = faqToggle.innerHTML;\n\t\t\t\t\t\n\t\t\t\t}\n\t\n\t\t\t} else { //expand answer\n\t\t\t\twrapper.style.height = faqa.offsetHeight + 'px';\t\t\n\t\t\t\twrapper.style.opacity = '1';\t\t\n\t\t\t\twrapper.style.transition = 'height ease-in-out 0.5s, opacity ease-in-out 1s';\t\t\t\t\t\twrapper.setAttribute( 'aria-hidden', 'false');\t\n\t\t\t//\tfaqq.setAttribute( 'aria-expanded', 'true');\t\n\t\t\t//\tfaqq.setAttribute( 'aria-pressed', 'true');\n\t\t\t\tfaqa.style.transform = 'translateY(0%)';\n\t\t\t\n\t\t\t\t\n\t\t\t\tif ( numOpen < faqNum ) {\n\t\t\t\t\tnumOpen++;\n\t\t\t\t}\n\n\t\t\t\tif ( numOpen == faqNum) {\n\t\t\t\t//\tfaqToggle.setAttribute( 'aria-expanded', 'true' );\n\t\t\t\t//\tfaqToggle.setAttribute( 'aria-pressed', 'true' );\n\t\t\t\t//\tfaqToggle.innerHTML = 'Close All Answers';\n\t\t\t\t//\tfaqToggleMsg = faqToggle.innerHTML;\n\t\t\t\t}\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t}//end if\n\t\t\t\n\t\t\t//https://usefulangle.com/post/156/javascript-scroll-to-element\n\t\t\t//when document has a scrollbar, attempt to bring clicked faqq to top of viewport\n\t\t\tfaqq.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});\t\t\t\n\t\t\t\n\t\t\t\t\t\n\t\t});\n\t\t//faqq.addEventListener('click')\t\n\t\t\n\t\t// Listen for window events\n\t\twindow.addEventListener('resize', function(e){\n\t\t\tif (wrapper.style.height != '0px') {\n\t\t\t\twrapper.style.height = faqa.offsetHeight + 'px';\n\t\t\t\t\n\t\t\t}\n\n\t\t});\t\n\t\t\t\t\t\n\t}//end for (let faqq of faqqs)\n\t\n\t\t\n});// end document.addEventListener(\"DOMContentLoaded\")\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/faq.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/file2.js?");

/***/ }),

/***/ "./src/assets/js/header-fixed.js":
/*!***************************************!*\
  !*** ./src/assets/js/header-fixed.js ***!
  \***************************************/
/***/ (function() {

eval("// header fixed\n\nwindow.onscroll = function() {\n    const docScrollTop = document.documentElement.scrollTop;\n    // console.log(docScrollTop);\n    if (window.innerWidth > 991) {\n        if (docScrollTop > 100) {\n            document.querySelector('header').classList.add('fixed');\n        } else {\n            document.querySelector('header').classList.remove('fixed');\n        }\n    }\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/header-fixed.js?");

/***/ }),

/***/ "./src/assets/js/intro-scroll.js":
/*!***************************************!*\
  !*** ./src/assets/js/intro-scroll.js ***!
  \***************************************/
/***/ (function() {

eval("document.addEventListener('DOMContentLoaded', function() {\n    var beforeAfterExample = new BeforeAfter(document.querySelector('#example'));\n  });\n\n  var BeforeAfter = (function () {\n    function BeforeAfter(handler) {\n        this.handler = handler;\n\n        if(this.checkHandlerExist() && this.checkImagesExist()){\n            this.init();\n            this.bindEvents();\n        }\n    }\n\n    BeforeAfter.prototype.init = function () {\n        this.wrapHandler();\n        this.wrapImages();\n        this.createHandler();\n    };\n\n    BeforeAfter.prototype.wrapHandler = function () {\n        var html = this.getHandler().innerHTML;\n        var container = document.createElement('div');\n        container.className = 'before-after';\n        container.innerHTML = html;\n\n        this.getHandler().innerHTML = container.outerHTML;\n    };\n\n    BeforeAfter.prototype.wrapImages = function () {\n        var images = this.getImages();\n\n        for(var i = 0, l = images.length; i < l; i++) {\n            images[i].outerHTML = this.getWrappedImage(images[i].outerHTML, i);\n        }\n    };\n\n    BeforeAfter.prototype.getWrappedImage = function (image, index) {\n        var photo = document.createElement('div');\n        photo.className = 'photo';\n        photo.innerHTML = image;\n\n        if(index === 0){\n            photo.className += ' before';\n        }\n        else{\n            photo.className += ' after';\n        }\n\n        return photo.outerHTML;\n    };\n\n    BeforeAfter.prototype.createHandler = function () {\n        var beforeAfterHandler = this.getHandler().querySelector('.before-after');\n\n        var dragHandler = document.createElement('div');\n        dragHandler.className = 'drag-handler';\n        dragHandler.draggable = true;\n        var dragElement = document.createElement('div');\n        dragElement.className = 'drag-element';\n        dragHandler.appendChild(dragElement);\n\n        beforeAfterHandler.innerHTML += dragHandler.outerHTML;\n    };\n\n    BeforeAfter.prototype.checkHandlerExist = function () {\n        return this.getHandler() !== undefined;\n    };\n\n    BeforeAfter.prototype.checkImagesExist = function () {\n        return this.getImages().length === 2;\n    };\n\n    BeforeAfter.prototype.getImages = function () {\n        var images = this.getHandler().querySelectorAll('img');\n        if(images.length === 0){\n            return this.getHandler().querySelectorAll('.layer');\n        }\n        return images;\n    };\n\n    BeforeAfter.prototype.bindEvents = function () {\n        var self = this;\n\n        'mousedown touchstart'.split(' ').forEach(function(evt) {\n            self.getDragHandler().addEventListener(evt, function (e) {\n                e.preventDefault();\n                e.stopPropagation();\n                self.markDragStart();\n            });\n        });\n\n        'mouseup touchend'.split(' ').forEach(function (evt) {\n            document.addEventListener(evt, function () {\n                self.markDragStop();\n            });\n        });\n\n        'mousemove touchmove'.split(' ').forEach(function (evt) {\n            self.getContainer().addEventListener(evt, function (e) {\n                if(self.isDragStart()){\n                    var moveX = evt === 'touchmove' ? e.changedTouches[0].clientX : e.clientX;\n                    self.update(moveX);\n                }\n            });\n        })\n    };\n\n    BeforeAfter.prototype.getHandler = function () {\n        return this.handler;\n    };\n\n    BeforeAfter.prototype.getContainer = function () {\n        return this.getHandler().querySelector('.before-after');\n    };\n\n    BeforeAfter.prototype.getDragHandler = function () {\n        return this.getHandler().querySelector('.drag-handler');\n    };\n\n    BeforeAfter.prototype.getDragHandlerOffsetX = function () {\n        return this.getDragHandler().offsetLeft;\n    };\n\n    BeforeAfter.prototype.getPositionByOffset = function (offsetX) {\n        var prePosition = (offsetX - this.getHandlerOffsetX()) * 100 / this.getImagesWidth();\n        var position = null;\n        if(prePosition < 0){\n            position = 0;\n        }\n        else if(prePosition > 100){\n            position = 100;\n        }\n        else {\n            position = prePosition;\n        }\n\n        return position\n    };\n\n    BeforeAfter.prototype.update = function (offsetX) {\n        var position = this.getPositionByOffset(offsetX);\n        this.updateDragHandlerPosition(position);\n        this.updatePhotoBefore(position);\n    };\n\n    BeforeAfter.prototype.updateDragHandlerPosition = function (position) {\n        this.getDragHandler().style.left = position + '%';\n    };\n\n    BeforeAfter.prototype.updatePhotoBefore = function (position) {\n        var photoBefore = this.getPhotoBefore();\n        var photoBeforeImage = this.getPhotoBeforeImage();\n        var translateValue = 100 - position;\n        photoBefore.style.transform = 'translate(' + (-1 * translateValue) + '%)';\n        photoBeforeImage.style.transform = 'translate(' + translateValue + '%)';\n    };\n\n    BeforeAfter.prototype.getPhotoBefore = function () {\n        return this.getHandler().querySelector('.photo.before');\n    };\n\n    BeforeAfter.prototype.getPhotoBeforeImage = function () {\n        var photoBefore = this.getPhotoBefore().querySelector('img');\n        if(photoBefore === null){\n            return this.getPhotoBefore().querySelector('.layer');\n        }\n        return photoBefore;\n    };\n\n    BeforeAfter.prototype.getImagesWidth = function () {\n        return this.getHandler().querySelector('.before-after').offsetWidth;\n    };\n\n    BeforeAfter.prototype.getHandlerOffsetX = function () {\n        return this.getHandler().getBoundingClientRect().left;\n    };\n\n    BeforeAfter.prototype.markDragStart = function () {\n        this.dragStart = true;\n    };\n\n    BeforeAfter.prototype.markDragStop = function () {\n        this.dragStart = false;\n    };\n\n    BeforeAfter.prototype.isDragStart = function () {\n        return this.dragStart === true;\n    };\n\n    return BeforeAfter;\n})();\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/intro-scroll.js?");

/***/ }),

/***/ "./src/assets/js/lightbox.js":
/*!***********************************!*\
  !*** ./src/assets/js/lightbox.js ***!
  \***********************************/
/***/ (function() {

eval("// ****** LightBox\nconst closeLightBox = document.querySelector('.lightbox__close');\nconst lightBox = document.querySelector('.lightbox');\nconst lightBoxImage = lightBox.querySelector('img');\n\nconsole.log(lightBox);\nconsole.log(closeLightBox);\nconsole.log(lightBoxImage);\n\nlightBox.addEventListener('click', function(event) {\n    if (event.target != lightBoxImage) {\n        console.log('close');\n        lightBox.classList.remove('show');\n        lightBox.classList.add('hide');\n    } else {\n        console.log('not close');\n        // lightBox.classList.remove('hide');\n        //  lightBox.classList.add('show');\n    }\n})\n\ncloseLightBox.addEventListener('click', function() {\n    lightBox.classList.remove('show');\n    lightBox.classList.add('hide');\n\n})\n const gallery = document.querySelector('.gallery__slider');\n const galleryItem = gallery.querySelectorAll('.gallery-item');\n console.log(galleryItem);\n\ngalleryItem.forEach(function(element) {\n    element.addEventListener('click', function() {\n       // console.log(element.querySelector('img').getAttribute('src'))\n        lightBox.classList.remove('hide');\n        lightBox.classList.add('show');\n        lightBoxImage.src = element.querySelector('img').getAttribute('src');\n        // console.log(element.querySelector('img').getAttribute('src'));\n    })\n})\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/lightbox.js?");

/***/ }),

/***/ "./src/assets/js/popup.js":
/*!********************************!*\
  !*** ./src/assets/js/popup.js ***!
  \********************************/
/***/ (function() {

eval("window.addEventListener('DOMContentLoaded', function() {\n console.log('POPUPPOPUP!!!')\n   /*==================== POPUP SUBMIT====================*/\n   var modalClick = document.querySelectorAll('[data-modal]');\n   var modalInner = document.getElementById('modal-inner');\n \n   modalClick.forEach(b => b.addEventListener('click', (event) => {\n       event.preventDefault();\n     //  console.log('click');\n       var modalText = b.dataset.modal;\n     // console.log(modalText);\n       var modal = document.querySelector(modalText);\n       console.log(modal);\n       if (modal !== null) {\n         \n         // console.log(btnCloseModal);\n           modal.classList.add('show');\n       }\n    \n   }))\n\n\n //console.log(btnCloseModal);\n    var btnCloseModal = document.getElementById('modal-close')\n     var moddd = btnCloseModal.closest('.modal');\n    // console.log(moddd);\n\n   function CloseModal(){ \n \n      moddd.classList.remove('show')\n     // location.reload();\n   }\n\n  \n    btnCloseModal.addEventListener('click', ()=> {\n        CloseModal()\n       // console.log(modal)\n       \n    })\n \n\n\n   moddd.addEventListener('click', () => {\n       CloseModal()  \n   })\n\n   modalInner.addEventListener('click', (event) => {\n      // console.log('click inner');\n       event.stopPropagation();\n   })\n\n\n// ___________FOR DOCTORS__________\nvar doctorClick = document.querySelectorAll('[data-popup]');\n//console.log(doctorClick);\nconst popup = document.querySelector(\".popup\");\n\nconst closeButton = popup.querySelector(\".popup__close\")\n\ndoctorClick.forEach(c => c.addEventListener('click', (event) => {\n    event.preventDefault();\n\n    var parentDoctorItem = c.closest('.ourdoctors-item');\n    //console.log(parentDoctorItem);\n     var popupText = c.dataset.popup;\n     console.log(popupText);\n\n     var doctorName = parentDoctorItem.querySelector('.ourdoctors__title');\n     var doctorText = parentDoctorItem.querySelector('.ourdoctors__content p');\n     var doctorID = parentDoctorItem.querySelector('.ourdoctors__id');\n     var doctorAvatar = parentDoctorItem.querySelector('.ourdoctors__photo');\n\n     console.log(doctorAvatar.innerHTML);\n\n     var popupWindow = document.querySelector(popupText);\n   //  console.log(popupWindow);\n\n    if (popupWindow !== null) {\n        popupWindow.classList.add('show');\n        history.pushState(null, null, window.location.pathname)\n    }\n\n    var dinamicTitle = document.getElementById('popup-title');\n    var dinamicAvatar = document.getElementById('popup-avatar');\n    var dinamicText = document.getElementById('popup-text');\n    var dinamicID = document.getElementById('popup-id');\n\n    dinamicTitle.innerHTML = doctorName.innerText;\n    dinamicAvatar.innerHTML = doctorAvatar.innerHTML;\n    dinamicText.innerHTML = doctorText.innerText;\n    dinamicID.innerHTML = doctorID.innerText;\n  \n}))\n\ncloseButton.addEventListener(\"click\", function() {\n  popup.classList.remove(\"show\")\n})\n\npopup.addEventListener('click', function(e) {\n  if(e.target.className === 'popup show' || e.target.className === 'popup--centered') {\n    popup.classList.remove(\"show\")\n  }\n})\n\nwindow.addEventListener('popstate', function(event) {\n    popup.classList.remove(\"show\")\n  }, false);\n\n})\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/popup.js?");

/***/ }),

/***/ "./src/assets/js/swiperjs.js":
/*!***********************************!*\
  !*** ./src/assets/js/swiperjs.js ***!
  \***********************************/
/***/ (function() {

eval("var swiperDoctors = new Swiper(\".ourdoctors__slider\", {\n    loop:true,\n    autoplay: {     //add\n        delay: 3000,\n    disableOnInteraction: false,\n    },    \n   \n    //centeredSlides:false,\n    slidesPerView: 3,\n    spaceBetween: 50,\n    grabCursor: true,\n\n    navigation: {\n      nextEl: \"#zak-next\",\n      prevEl: \"#zak-prev\",\n    },\n    breakpoints: {\n        0: {\n          slidesPerView: 1,\n          // centeredSlides:true,\n           spaceBetween: 10,\n          loop:true,\n          autoplay: {     //add\n              delay: 3000,\n          disableOnInteraction: false,\n          },    \n          \n        },\n        568: {\n          slidesPerView: 2,\n           spaceBetween: 10,\n          // centeredSlides:false,\n          loop:true,\n          autoplay: {     //add\n              delay: 3000,\n          disableOnInteraction: false,\n          },    \n        },\n        768: {\n          slidesPerView: 2,\n           spaceBetween: 30,\n          // centeredSlides:false,\n          loop:true,\n          autoplay: {     //add\n              delay: 3000,\n          disableOnInteraction: false,\n          },    \n        },\n        1024: {\n          slidesPerView: 3,\n           spaceBetween: 30,\n          loop:true,\n          autoplay: {     //add\n              delay: 3000,\n          disableOnInteraction: false,\n          },    \n        },\n      },\n});\n\nvar swiperGallery = new Swiper(\".gallery__slider\", {\n    \n    autoplay: {     //add\n        delay: 3000,\n    disableOnInteraction: false,\n    },    \n\n    slidesPerView: 3,\n    spaceBetween: 50,\n    grabCursor: true,\n\n    navigation: {\n      nextEl: \"#gal-next\",\n      prevEl: \"#gal-prev\",\n    },\n    breakpoints: {\n        0: {\n          slidesPerView: 1,\n          spaceBetween: 10,\n          loop:true,\n        },\n        568: {\n          slidesPerView: 2,\n          spaceBetween: 10,\n          loop:true,\n        },\n        768: {\n          slidesPerView: 2,\n           spaceBetween: 30,\n           loop:true,\n        },\n        1024: {\n          slidesPerView: 3,\n          spaceBetween: 50,\n          loop:true,\n        },\n      },\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/swiperjs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	__webpack_modules__["./src/assets/js/burger.js"]();
/******/ 	__webpack_modules__["./src/assets/js/faq.js"]();
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	__webpack_modules__["./src/assets/js/header-fixed.js"]();
/******/ 	__webpack_modules__["./src/assets/js/intro-scroll.js"]();
/******/ 	__webpack_modules__["./src/assets/js/lightbox.js"]();
/******/ 	__webpack_modules__["./src/assets/js/popup.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/swiperjs.js"]();
/******/ 	
/******/ })()
;