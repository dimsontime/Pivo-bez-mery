<template>
  <div class="page-wrapper">
    <div class="head-logo">
      <img src="@/assets/img/mera-logo.png" alt="logo">
    </div>
    <h1 class="gradient-font">Выбери настроение<br>грядущего вечера</h1>

      <div class="mainContainer">
      <div class="svgContainer">
        <div id="svgContainer" class="overflowContainer">
          <canvas class="hoveranusCanvasus"></canvas>
        </div>

            <svg id="light" width="100%" height="100%" viewBox="0 0 709 709" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_0_1)">
            <g clip-path="url(#paint0_angular_0_1_clip_path)" data-figma-skip-parse="true"><g transform="matrix(0.00123249 -0.340828 0.377617 0.000734742 354.105 354.105)"><foreignObject x="-923.989" y="-923.989" width="1847.98" height="1847.98"><div xmlns="http://www.w3.org/1999/xhtml" style="background:conic-gradient(from 90deg,rgba(184, 38, 252, 1) 0deg,rgba(28, 255, 217, 1) 65.0893deg,rgba(21, 67, 252, 0) 79.9232deg,rgba(22, 68, 253, 0) 169.465deg,rgba(33, 180, 254, 1) 196.696deg,rgba(81, 130, 253, 0) 266.962deg,rgba(90, 117, 253, 0) 308.451deg,rgba(185, 39, 253, 1) 360deg);height:100%;width:100%;opacity:1"></div></foreignObject></g></g><path d="M656.059 354.105H649.88C649.88 517.457 517.457 649.88 354.105 649.88V656.059V662.238C524.282 662.238 662.238 524.282 662.238 354.105H656.059ZM354.105 656.059V649.88C190.754 649.88 58.331 517.457 58.331 354.105H52.1519H45.9727C45.9727 524.282 183.928 662.238 354.105 662.238V656.059ZM52.1519 354.105H58.331C58.331 190.754 190.754 58.331 354.105 58.331V52.1519V45.9727C183.928 45.9727 45.9727 183.928 45.9727 354.105H52.1519ZM354.105 52.1519V58.331C517.457 58.331 649.88 190.754 649.88 354.105H656.059H662.238C662.238 183.928 524.282 45.9727 354.105 45.9727V52.1519Z" data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_ANGULAR&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.72501236200332642,&#34;g&#34;:0.15236686170101166,&#34;b&#34;:0.99038463830947876,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.11057692021131516,&#34;g&#34;:1.0,&#34;b&#34;:0.85176283121109009,&#34;a&#34;:1.0},&#34;position&#34;:0.18080374598503113},{&#34;color&#34;:{&#34;r&#34;:0.085706360638141632,&#34;g&#34;:0.26664200425148010,&#34;b&#34;:0.99038463830947876,&#34;a&#34;:0.0},&#34;position&#34;:0.22200886905193329},{&#34;color&#34;:{&#34;r&#34;:0.086274512112140656,&#34;g&#34;:0.26666668057441711,&#34;b&#34;:0.99215686321258545,&#34;a&#34;:0.0},&#34;position&#34;:0.47073730826377869},{&#34;color&#34;:{&#34;r&#34;:0.12956780195236206,&#34;g&#34;:0.70751202106475830,&#34;b&#34;:0.99648410081863403,&#34;a&#34;:1.0},&#34;position&#34;:0.54637867212295532},{&#34;color&#34;:{&#34;r&#34;:0.31858760118484497,&#34;g&#34;:0.50982791185379028,&#34;b&#34;:0.99355345964431763,&#34;a&#34;:0.0},&#34;position&#34;:0.74156236648559570},{&#34;color&#34;:{&#34;r&#34;:0.35590735077857971,&#34;g&#34;:0.46208527684211731,&#34;b&#34;:0.99297481775283813,&#34;a&#34;:0.0},&#34;position&#34;:0.85680776834487915},{&#34;color&#34;:{&#34;r&#34;:0.72549021244049072,&#34;g&#34;:0.15294118225574493,&#34;b&#34;:0.99215686321258545,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.72501236200332642,&#34;g&#34;:0.15236686170101166,&#34;b&#34;:0.99038463830947876,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.11057692021131516,&#34;g&#34;:1.0,&#34;b&#34;:0.85176283121109009,&#34;a&#34;:1.0},&#34;position&#34;:0.18080374598503113},{&#34;color&#34;:{&#34;r&#34;:0.085706360638141632,&#34;g&#34;:0.26664200425148010,&#34;b&#34;:0.99038463830947876,&#34;a&#34;:0.0},&#34;position&#34;:0.22200886905193329},{&#34;color&#34;:{&#34;r&#34;:0.086274512112140656,&#34;g&#34;:0.26666668057441711,&#34;b&#34;:0.99215686321258545,&#34;a&#34;:0.0},&#34;position&#34;:0.47073730826377869},{&#34;color&#34;:{&#34;r&#34;:0.12956780195236206,&#34;g&#34;:0.70751202106475830,&#34;b&#34;:0.99648410081863403,&#34;a&#34;:1.0},&#34;position&#34;:0.54637867212295532},{&#34;color&#34;:{&#34;r&#34;:0.31858760118484497,&#34;g&#34;:0.50982791185379028,&#34;b&#34;:0.99355345964431763,&#34;a&#34;:0.0},&#34;position&#34;:0.74156236648559570},{&#34;color&#34;:{&#34;r&#34;:0.35590735077857971,&#34;g&#34;:0.46208527684211731,&#34;b&#34;:0.99297481775283813,&#34;a&#34;:0.0},&#34;position&#34;:0.85680776834487915},{&#34;color&#34;:{&#34;r&#34;:0.72549021244049072,&#34;g&#34;:0.15294118225574493,&#34;b&#34;:0.99215686321258545,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;transform&#34;:{&#34;m00&#34;:2.4649832248687744,&#34;m01&#34;:755.23339843750,&#34;m02&#34;:-24.743810653686523,&#34;m10&#34;:-681.65570068359375,&#34;m11&#34;:1.4694830179214478,&#34;m12&#34;:694.19854736328125},&#34;opacity&#34;:1.0,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}"/>
            </g>
            <g filter="url(#filter1_f_0_1)">
            <g clip-path="url(#paint1_angular_0_1_clip_path)" data-figma-skip-parse="true"><g transform="matrix(0.00123249 -0.340828 0.377617 0.000734742 354.105 354.105)"><foreignObject x="-923.989" y="-923.989" width="1847.98" height="1847.98"><div xmlns="http://www.w3.org/1999/xhtml" style="background:conic-gradient(from 90deg,rgba(184, 38, 252, 1) 0deg,rgba(28, 255, 217, 1) 65.0893deg,rgba(21, 67, 252, 0) 79.9232deg,rgba(22, 68, 253, 0) 169.465deg,rgba(33, 180, 254, 1) 196.696deg,rgba(81, 130, 253, 0) 266.962deg,rgba(90, 117, 253, 0) 308.451deg,rgba(185, 39, 253, 1) 360deg);height:100%;width:100%;opacity:1"></div></foreignObject></g></g><path d="M656.059 354.105H649.88C649.88 517.457 517.457 649.88 354.105 649.88V656.059V662.238C524.282 662.238 662.238 524.282 662.238 354.105H656.059ZM354.105 656.059V649.88C190.754 649.88 58.331 517.457 58.331 354.105H52.1519H45.9727C45.9727 524.282 183.928 662.238 354.105 662.238V656.059ZM52.1519 354.105H58.331C58.331 190.754 190.754 58.331 354.105 58.331V52.1519V45.9727C183.928 45.9727 45.9727 183.928 45.9727 354.105H52.1519ZM354.105 52.1519V58.331C517.457 58.331 649.88 190.754 649.88 354.105H656.059H662.238C662.238 183.928 524.282 45.9727 354.105 45.9727V52.1519Z" data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_ANGULAR&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.72501236200332642,&#34;g&#34;:0.15236686170101166,&#34;b&#34;:0.99038463830947876,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.11057692021131516,&#34;g&#34;:1.0,&#34;b&#34;:0.85176283121109009,&#34;a&#34;:1.0},&#34;position&#34;:0.18080374598503113},{&#34;color&#34;:{&#34;r&#34;:0.085706360638141632,&#34;g&#34;:0.26664200425148010,&#34;b&#34;:0.99038463830947876,&#34;a&#34;:0.0},&#34;position&#34;:0.22200886905193329},{&#34;color&#34;:{&#34;r&#34;:0.086274512112140656,&#34;g&#34;:0.26666668057441711,&#34;b&#34;:0.99215686321258545,&#34;a&#34;:0.0},&#34;position&#34;:0.47073730826377869},{&#34;color&#34;:{&#34;r&#34;:0.12956780195236206,&#34;g&#34;:0.70751202106475830,&#34;b&#34;:0.99648410081863403,&#34;a&#34;:1.0},&#34;position&#34;:0.54637867212295532},{&#34;color&#34;:{&#34;r&#34;:0.31858760118484497,&#34;g&#34;:0.50982791185379028,&#34;b&#34;:0.99355345964431763,&#34;a&#34;:0.0},&#34;position&#34;:0.74156236648559570},{&#34;color&#34;:{&#34;r&#34;:0.35590735077857971,&#34;g&#34;:0.46208527684211731,&#34;b&#34;:0.99297481775283813,&#34;a&#34;:0.0},&#34;position&#34;:0.85680776834487915},{&#34;color&#34;:{&#34;r&#34;:0.72549021244049072,&#34;g&#34;:0.15294118225574493,&#34;b&#34;:0.99215686321258545,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.72501236200332642,&#34;g&#34;:0.15236686170101166,&#34;b&#34;:0.99038463830947876,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.11057692021131516,&#34;g&#34;:1.0,&#34;b&#34;:0.85176283121109009,&#34;a&#34;:1.0},&#34;position&#34;:0.18080374598503113},{&#34;color&#34;:{&#34;r&#34;:0.085706360638141632,&#34;g&#34;:0.26664200425148010,&#34;b&#34;:0.99038463830947876,&#34;a&#34;:0.0},&#34;position&#34;:0.22200886905193329},{&#34;color&#34;:{&#34;r&#34;:0.086274512112140656,&#34;g&#34;:0.26666668057441711,&#34;b&#34;:0.99215686321258545,&#34;a&#34;:0.0},&#34;position&#34;:0.47073730826377869},{&#34;color&#34;:{&#34;r&#34;:0.12956780195236206,&#34;g&#34;:0.70751202106475830,&#34;b&#34;:0.99648410081863403,&#34;a&#34;:1.0},&#34;position&#34;:0.54637867212295532},{&#34;color&#34;:{&#34;r&#34;:0.31858760118484497,&#34;g&#34;:0.50982791185379028,&#34;b&#34;:0.99355345964431763,&#34;a&#34;:0.0},&#34;position&#34;:0.74156236648559570},{&#34;color&#34;:{&#34;r&#34;:0.35590735077857971,&#34;g&#34;:0.46208527684211731,&#34;b&#34;:0.99297481775283813,&#34;a&#34;:0.0},&#34;position&#34;:0.85680776834487915},{&#34;color&#34;:{&#34;r&#34;:0.72549021244049072,&#34;g&#34;:0.15294118225574493,&#34;b&#34;:0.99215686321258545,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;transform&#34;:{&#34;m00&#34;:2.4649832248687744,&#34;m01&#34;:755.23339843750,&#34;m02&#34;:-24.743810653686523,&#34;m10&#34;:-681.65570068359375,&#34;m11&#34;:1.4694830179214478,&#34;m12&#34;:694.19854736328125},&#34;opacity&#34;:1.0,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}"/>
            </g>
            <defs>
            <filter id="filter0_f_0_1" x="35.1798" y="35.1798" width="637.851" height="637.851" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="5.39644" result="effect1_foregroundBlur_0_1"/>
            </filter>
            <clipPath id="paint0_angular_0_1_clip_path"><path d="M656.059 354.105H649.88C649.88 517.457 517.457 649.88 354.105 649.88V656.059V662.238C524.282 662.238 662.238 524.282 662.238 354.105H656.059ZM354.105 656.059V649.88C190.754 649.88 58.331 517.457 58.331 354.105H52.1519H45.9727C45.9727 524.282 183.928 662.238 354.105 662.238V656.059ZM52.1519 354.105H58.331C58.331 190.754 190.754 58.331 354.105 58.331V52.1519V45.9727C183.928 45.9727 45.9727 183.928 45.9727 354.105H52.1519ZM354.105 52.1519V58.331C517.457 58.331 649.88 190.754 649.88 354.105H656.059H662.238C662.238 183.928 524.282 45.9727 354.105 45.9727V52.1519Z"/></clipPath><filter id="filter1_f_0_1" x="-1.90735e-05" y="-8.01086e-05" width="708.211" height="708.211" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="22.9864" result="effect1_foregroundBlur_0_1"/>
            </filter>
            <clipPath id="paint1_angular_0_1_clip_path"><path d="M656.059 354.105H649.88C649.88 517.457 517.457 649.88 354.105 649.88V656.059V662.238C524.282 662.238 662.238 524.282 662.238 354.105H656.059ZM354.105 656.059V649.88C190.754 649.88 58.331 517.457 58.331 354.105H52.1519H45.9727C45.9727 524.282 183.928 662.238 354.105 662.238V656.059ZM52.1519 354.105H58.331C58.331 190.754 190.754 58.331 354.105 58.331V52.1519V45.9727C183.928 45.9727 45.9727 183.928 45.9727 354.105H52.1519ZM354.105 52.1519V58.331C517.457 58.331 649.88 190.754 649.88 354.105H656.059H662.238C662.238 183.928 524.282 45.9727 354.105 45.9727V52.1519Z"/></clipPath></defs>
            </svg>

            <svg id="lightA" width="100%" height="100%" viewBox="0 0 709 709" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_0_1)">
            <g clip-path="url(#paint0_angular_0_1_clip_path)" data-figma-skip-parse="true"><g transform="matrix(0.00123249 -0.340828 0.377617 0.000734742 354.105 354.105)"><foreignObject x="-923.989" y="-923.989" width="1847.98" height="1847.98"><div xmlns="http://www.w3.org/1999/xhtml" style="background:conic-gradient(from 90deg,rgba(184, 38, 252, 1) 0deg,rgba(28, 255, 217, 1) 65.0893deg,rgba(21, 67, 252, 0) 79.9232deg,rgba(22, 68, 253, 0) 169.465deg,rgba(33, 180, 254, 1) 196.696deg,rgba(81, 130, 253, 0) 266.962deg,rgba(90, 117, 253, 0) 308.451deg,rgba(185, 39, 253, 1) 360deg);height:100%;width:100%;opacity:1"></div></foreignObject></g></g><path d="M656.059 354.105H649.88C649.88 517.457 517.457 649.88 354.105 649.88V656.059V662.238C524.282 662.238 662.238 524.282 662.238 354.105H656.059ZM354.105 656.059V649.88C190.754 649.88 58.331 517.457 58.331 354.105H52.1519H45.9727C45.9727 524.282 183.928 662.238 354.105 662.238V656.059ZM52.1519 354.105H58.331C58.331 190.754 190.754 58.331 354.105 58.331V52.1519V45.9727C183.928 45.9727 45.9727 183.928 45.9727 354.105H52.1519ZM354.105 52.1519V58.331C517.457 58.331 649.88 190.754 649.88 354.105H656.059H662.238C662.238 183.928 524.282 45.9727 354.105 45.9727V52.1519Z" data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_ANGULAR&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.72501236200332642,&#34;g&#34;:0.15236686170101166,&#34;b&#34;:0.99038463830947876,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.11057692021131516,&#34;g&#34;:1.0,&#34;b&#34;:0.85176283121109009,&#34;a&#34;:1.0},&#34;position&#34;:0.18080374598503113},{&#34;color&#34;:{&#34;r&#34;:0.085706360638141632,&#34;g&#34;:0.26664200425148010,&#34;b&#34;:0.99038463830947876,&#34;a&#34;:0.0},&#34;position&#34;:0.22200886905193329},{&#34;color&#34;:{&#34;r&#34;:0.086274512112140656,&#34;g&#34;:0.26666668057441711,&#34;b&#34;:0.99215686321258545,&#34;a&#34;:0.0},&#34;position&#34;:0.47073730826377869},{&#34;color&#34;:{&#34;r&#34;:0.12956780195236206,&#34;g&#34;:0.70751202106475830,&#34;b&#34;:0.99648410081863403,&#34;a&#34;:1.0},&#34;position&#34;:0.54637867212295532},{&#34;color&#34;:{&#34;r&#34;:0.31858760118484497,&#34;g&#34;:0.50982791185379028,&#34;b&#34;:0.99355345964431763,&#34;a&#34;:0.0},&#34;position&#34;:0.74156236648559570},{&#34;color&#34;:{&#34;r&#34;:0.35590735077857971,&#34;g&#34;:0.46208527684211731,&#34;b&#34;:0.99297481775283813,&#34;a&#34;:0.0},&#34;position&#34;:0.85680776834487915},{&#34;color&#34;:{&#34;r&#34;:0.72549021244049072,&#34;g&#34;:0.15294118225574493,&#34;b&#34;:0.99215686321258545,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.72501236200332642,&#34;g&#34;:0.15236686170101166,&#34;b&#34;:0.99038463830947876,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.11057692021131516,&#34;g&#34;:1.0,&#34;b&#34;:0.85176283121109009,&#34;a&#34;:1.0},&#34;position&#34;:0.18080374598503113},{&#34;color&#34;:{&#34;r&#34;:0.085706360638141632,&#34;g&#34;:0.26664200425148010,&#34;b&#34;:0.99038463830947876,&#34;a&#34;:0.0},&#34;position&#34;:0.22200886905193329},{&#34;color&#34;:{&#34;r&#34;:0.086274512112140656,&#34;g&#34;:0.26666668057441711,&#34;b&#34;:0.99215686321258545,&#34;a&#34;:0.0},&#34;position&#34;:0.47073730826377869},{&#34;color&#34;:{&#34;r&#34;:0.12956780195236206,&#34;g&#34;:0.70751202106475830,&#34;b&#34;:0.99648410081863403,&#34;a&#34;:1.0},&#34;position&#34;:0.54637867212295532},{&#34;color&#34;:{&#34;r&#34;:0.31858760118484497,&#34;g&#34;:0.50982791185379028,&#34;b&#34;:0.99355345964431763,&#34;a&#34;:0.0},&#34;position&#34;:0.74156236648559570},{&#34;color&#34;:{&#34;r&#34;:0.35590735077857971,&#34;g&#34;:0.46208527684211731,&#34;b&#34;:0.99297481775283813,&#34;a&#34;:0.0},&#34;position&#34;:0.85680776834487915},{&#34;color&#34;:{&#34;r&#34;:0.72549021244049072,&#34;g&#34;:0.15294118225574493,&#34;b&#34;:0.99215686321258545,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;transform&#34;:{&#34;m00&#34;:2.4649832248687744,&#34;m01&#34;:755.23339843750,&#34;m02&#34;:-24.743810653686523,&#34;m10&#34;:-681.65570068359375,&#34;m11&#34;:1.4694830179214478,&#34;m12&#34;:694.19854736328125},&#34;opacity&#34;:1.0,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}"/>
            </g>
            <g filter="url(#filter1_f_0_1)">
            <g clip-path="url(#paint1_angular_0_1_clip_path)" data-figma-skip-parse="true"><g transform="matrix(0.00123249 -0.340828 0.377617 0.000734742 354.105 354.105)"><foreignObject x="-923.989" y="-923.989" width="1847.98" height="1847.98"><div xmlns="http://www.w3.org/1999/xhtml" style="background:conic-gradient(from 90deg,rgba(184, 38, 252, 1) 0deg,rgba(28, 255, 217, 1) 65.0893deg,rgba(21, 67, 252, 0) 79.9232deg,rgba(22, 68, 253, 0) 169.465deg,rgba(33, 180, 254, 1) 196.696deg,rgba(81, 130, 253, 0) 266.962deg,rgba(90, 117, 253, 0) 308.451deg,rgba(185, 39, 253, 1) 360deg);height:100%;width:100%;opacity:1"></div></foreignObject></g></g><path d="M656.059 354.105H649.88C649.88 517.457 517.457 649.88 354.105 649.88V656.059V662.238C524.282 662.238 662.238 524.282 662.238 354.105H656.059ZM354.105 656.059V649.88C190.754 649.88 58.331 517.457 58.331 354.105H52.1519H45.9727C45.9727 524.282 183.928 662.238 354.105 662.238V656.059ZM52.1519 354.105H58.331C58.331 190.754 190.754 58.331 354.105 58.331V52.1519V45.9727C183.928 45.9727 45.9727 183.928 45.9727 354.105H52.1519ZM354.105 52.1519V58.331C517.457 58.331 649.88 190.754 649.88 354.105H656.059H662.238C662.238 183.928 524.282 45.9727 354.105 45.9727V52.1519Z" data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_ANGULAR&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.72501236200332642,&#34;g&#34;:0.15236686170101166,&#34;b&#34;:0.99038463830947876,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.11057692021131516,&#34;g&#34;:1.0,&#34;b&#34;:0.85176283121109009,&#34;a&#34;:1.0},&#34;position&#34;:0.18080374598503113},{&#34;color&#34;:{&#34;r&#34;:0.085706360638141632,&#34;g&#34;:0.26664200425148010,&#34;b&#34;:0.99038463830947876,&#34;a&#34;:0.0},&#34;position&#34;:0.22200886905193329},{&#34;color&#34;:{&#34;r&#34;:0.086274512112140656,&#34;g&#34;:0.26666668057441711,&#34;b&#34;:0.99215686321258545,&#34;a&#34;:0.0},&#34;position&#34;:0.47073730826377869},{&#34;color&#34;:{&#34;r&#34;:0.12956780195236206,&#34;g&#34;:0.70751202106475830,&#34;b&#34;:0.99648410081863403,&#34;a&#34;:1.0},&#34;position&#34;:0.54637867212295532},{&#34;color&#34;:{&#34;r&#34;:0.31858760118484497,&#34;g&#34;:0.50982791185379028,&#34;b&#34;:0.99355345964431763,&#34;a&#34;:0.0},&#34;position&#34;:0.74156236648559570},{&#34;color&#34;:{&#34;r&#34;:0.35590735077857971,&#34;g&#34;:0.46208527684211731,&#34;b&#34;:0.99297481775283813,&#34;a&#34;:0.0},&#34;position&#34;:0.85680776834487915},{&#34;color&#34;:{&#34;r&#34;:0.72549021244049072,&#34;g&#34;:0.15294118225574493,&#34;b&#34;:0.99215686321258545,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.72501236200332642,&#34;g&#34;:0.15236686170101166,&#34;b&#34;:0.99038463830947876,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.11057692021131516,&#34;g&#34;:1.0,&#34;b&#34;:0.85176283121109009,&#34;a&#34;:1.0},&#34;position&#34;:0.18080374598503113},{&#34;color&#34;:{&#34;r&#34;:0.085706360638141632,&#34;g&#34;:0.26664200425148010,&#34;b&#34;:0.99038463830947876,&#34;a&#34;:0.0},&#34;position&#34;:0.22200886905193329},{&#34;color&#34;:{&#34;r&#34;:0.086274512112140656,&#34;g&#34;:0.26666668057441711,&#34;b&#34;:0.99215686321258545,&#34;a&#34;:0.0},&#34;position&#34;:0.47073730826377869},{&#34;color&#34;:{&#34;r&#34;:0.12956780195236206,&#34;g&#34;:0.70751202106475830,&#34;b&#34;:0.99648410081863403,&#34;a&#34;:1.0},&#34;position&#34;:0.54637867212295532},{&#34;color&#34;:{&#34;r&#34;:0.31858760118484497,&#34;g&#34;:0.50982791185379028,&#34;b&#34;:0.99355345964431763,&#34;a&#34;:0.0},&#34;position&#34;:0.74156236648559570},{&#34;color&#34;:{&#34;r&#34;:0.35590735077857971,&#34;g&#34;:0.46208527684211731,&#34;b&#34;:0.99297481775283813,&#34;a&#34;:0.0},&#34;position&#34;:0.85680776834487915},{&#34;color&#34;:{&#34;r&#34;:0.72549021244049072,&#34;g&#34;:0.15294118225574493,&#34;b&#34;:0.99215686321258545,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;transform&#34;:{&#34;m00&#34;:2.4649832248687744,&#34;m01&#34;:755.23339843750,&#34;m02&#34;:-24.743810653686523,&#34;m10&#34;:-681.65570068359375,&#34;m11&#34;:1.4694830179214478,&#34;m12&#34;:694.19854736328125},&#34;opacity&#34;:1.0,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}"/>
            </g>
            <defs>
            <filter id="filter0_f_0_1" x="35.1798" y="35.1798" width="637.851" height="637.851" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="5.39644" result="effect1_foregroundBlur_0_1"/>
            </filter>
            <clipPath id="paint0_angular_0_1_clip_path"><path d="M656.059 354.105H649.88C649.88 517.457 517.457 649.88 354.105 649.88V656.059V662.238C524.282 662.238 662.238 524.282 662.238 354.105H656.059ZM354.105 656.059V649.88C190.754 649.88 58.331 517.457 58.331 354.105H52.1519H45.9727C45.9727 524.282 183.928 662.238 354.105 662.238V656.059ZM52.1519 354.105H58.331C58.331 190.754 190.754 58.331 354.105 58.331V52.1519V45.9727C183.928 45.9727 45.9727 183.928 45.9727 354.105H52.1519ZM354.105 52.1519V58.331C517.457 58.331 649.88 190.754 649.88 354.105H656.059H662.238C662.238 183.928 524.282 45.9727 354.105 45.9727V52.1519Z"/></clipPath><filter id="filter1_f_0_1" x="-1.90735e-05" y="-8.01086e-05" width="708.211" height="708.211" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="22.9864" result="effect1_foregroundBlur_0_1"/>
            </filter>
            <clipPath id="paint1_angular_0_1_clip_path"><path d="M656.059 354.105H649.88C649.88 517.457 517.457 649.88 354.105 649.88V656.059V662.238C524.282 662.238 662.238 524.282 662.238 354.105H656.059ZM354.105 656.059V649.88C190.754 649.88 58.331 517.457 58.331 354.105H52.1519H45.9727C45.9727 524.282 183.928 662.238 354.105 662.238V656.059ZM52.1519 354.105H58.331C58.331 190.754 190.754 58.331 354.105 58.331V52.1519V45.9727C183.928 45.9727 45.9727 183.928 45.9727 354.105H52.1519ZM354.105 52.1519V58.331C517.457 58.331 649.88 190.754 649.88 354.105H656.059H662.238C662.238 183.928 524.282 45.9727 354.105 45.9727V52.1519Z"/></clipPath></defs>
            </svg>

        </div>
      </div>

    <router-link to="/p3" class="btn-prev">
      <div class="btn-icon">
        <img src="@/assets/img/icon-prev.png" alt="icon">
      </div>
    </router-link>

    <router-link to="p5" class="btn-finish">
      Финиш
    </router-link>
  </div>
</template>

<script>

import gsap from 'gsap'
import p5 from 'p5'

let P5;



let sketch = (sk) => {    

    var lastPos = {}
    var posArr = []
    const maxDistance = 5 //Radius  
    var controlContainer = document.querySelector('#svgContainer')

    sk.setup = () => {

        sk.createCanvas(controlContainer.clientWidth, controlContainer.clientHeight).parent('svgContainer')
  
        //MOVE MOUSE
        let canvas = document.querySelector(".p5Canvas")
        //console.log(canvas)
        
        canvas.addEventListener("pointermove", (e) => {
          
        })

        
      
        sk.angleMode(sk.DEGREES)
        sk.colorMode(sk.HSB)

    }

    sk.draw = () => {
      sk.background("#221B40") //Background Color
  

      sk.textAlign(sk.CENTER, sk.CENTER);
      sk.textSize(12);
      sk.textFont('Courier New')
      sk.detail = 60;
    
      
      for (let y = 0; y < sk.height; y+=sk.detail) {
        
        for (let x = 0; x < sk.width; x+=sk.detail) {
          //DRAW FUNCTION
          
          //Circles Cordinates
          let coordX = x + (sk.detail / 2);
          let coordY = y + (sk.detail / 2);
          
          let distance = Math.sqrt((Math.pow(coordX-sk.mouseX,2))+(Math.pow(coordY-sk.mouseY,2))) / 100
          
          
          let scale = sk.map(distance, 0, maxDistance, maxDistance+3, 0);
          if (scale < 1) { scale = 1; }
          
          sk.circle(coordX, coordY, sk.round(scale) * 3)
          sk.fill(70, sk.map(sk.round(scale), 0, maxDistance, 0, 100), 84);
          
          sk.stroke(70, sk.map(sk.round(scale), 0, maxDistance, 0, 100), 84);
          
          
          //line(coordX, coordY, (coordX + winMouseX) / 2, (coordY + winMouseY) / 2);
          
          
          let bla = midpoint(coordX, coordY, sk.mouseX, sk.mouseY, sk.map(scale, 1,5,0,0.2))

          function midpoint(lat1, long1, lat2, long2, per) {
              return [lat1 + (lat2 - lat1) * per, long1 + (long2 - long1) * per];
          }
          
          sk.line(coordX, coordY, bla[0], bla[1]);
          
          
        }
        
      }

    }

    sk.windowResized = () => {
      sk.resizeCanvas(controlContainer.clientWidth, controlContainer.clientHeight)
    }

}



export default {
  name: 'p4',
  components: {},
  mounted() {

      P5 = new p5(sketch)

      var hoveranus = new Image()
      hoveranus.src = '/hoveranus2.jpg'
      var hoveranusCanvasus, ctx;

      hoveranusCanvasus = document.querySelector(".hoveranusCanvasus")
      ctx = hoveranusCanvasus.getContext('2d')

      hoveranusCanvasus.width = hoveranusCanvasus.clientWidth
      hoveranusCanvasus.height = hoveranusCanvasus.clientHeight


      console.log(hoveranusCanvasus.width , hoveranusCanvasus.height)

      hoveranus.onload = function() {
        ctx.drawImage(hoveranus, 0, 0, hoveranusCanvasus.width , hoveranusCanvasus.height)
        hoveranus.style.display = 'none'
      }

      function pick(event) {
        var x = event.layerX
        var y = event.layerY
        var pixel = ctx.getImageData(x, y, 1, 1)
        var data = pixel.data;
        var rgb = 'rgb(' + data[0] + ', ' + data[1] +
                  ', ' + data[2] + ')';
        let number = Math.round(data[0] + data[1] + data[2])

        //console.log(number)
        
        if (number == 336) {console.log('green')}
        if (number == 344) {console.log('blue')}
        if (number == 502) {console.log('yellow')}
        if (number == 254) {console.log('red')}
        if (number == 0) {console.log('black')}
        if (number == 765) {console.log('white')}
      }
      hoveranusCanvasus.addEventListener('mousemove', pick)

      console.log(hoveranusCanvasus)

      gsap.to("#light", {
        ease: "none",
        duration: 10,
        rotation: 360,
        repeat: -1,
      })
        
      gsap.to("#lightA", {
        ease: "none",
        duration: 12,
        rotation: -360,
        repeat: -1,
      })

  },
  beforeUnmount() {
    /// САНЯ ЕБАШЬ СЮДЫ
    P5.remove()
  }
}
</script>

<style scoped lang="scss">
* img {
  width: 100%;
}

.page-wrapper {
  width: 100vw;
  height: 100vh;
  position: relative;
}

.head-logo {
  width: 112px;
  height: 102px;
  position: absolute;
  z-index: 10;
  bottom: 40px;
  left: 40px;
}

h1 {
  position: absolute;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
}

.btn-prev {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 400px;
  width: 136px;

  background-image: url('../assets/img/prev-bg.png');
  background-size: contain;

  .btn-icon {
    width: 92px;
    height: 92px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}


.btn-finish {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);

  text-decoration: none;
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  text-transform: capitalize;
  padding: 18px 60px;
  border-radius: 100px;
  background: rgba(#fff, .2);
  border: none;

  &::before {
    content: "";
    --angle: 0deg;
    position: absolute;
    inset: 0;
    padding: 3px; /* толщина бордера */
    border-radius: 999px;

    background: linear-gradient(
        var(--angle),
        #9EFCA6 -61.15%,
        #AEF9DB -23.29%,
        #D5E53A -1.77%,
        #57FBF4 11.56%,
        #6EAEEC 28.78%,
        #69E2EA 55.33%,
        #E7ECBD 68.53%,
        #FF8753 79.14%,
        #D5D632 108.98%,
        #AEDB51 117.59%,
        #0CF1D4 130.19%
    );

    animation: 5s gradient-b linear infinite;

    /* Магия вырезания центра */
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;

    mask-composite: exclude;

    pointer-events: none;
  }
}


.svgContainer {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 40vw;
  height: 40vw;
  background-color: #020605;
  border-radius: 100%;
  border: solid 1.35em #020102;
  box-shadow: 0 35px 75.8px 0 #17123D;
  position: relative;
  /*overflow: hidden;*/
}

.overflowContainer {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 100%;
  position: relative;
}

.hoveranusCanvasus {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
}

#svgControl {
  transform: scale(1.7);
}

#light {
  position: absolute;
  scale: 1.3;
  z-index: 9;
  pointer-events: none;
  mix-blend-mode: screen;
}

#lightA {
  position: absolute;
  scale: 1.3;
  z-index: 9;
  pointer-events: none;
  mix-blend-mode: plus-lighter;
}

.mainContainer {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

</style>
