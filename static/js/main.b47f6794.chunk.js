(this["webpackJsonpopen-mic-nights"]=this["webpackJsonpopen-mic-nights"]||[]).push([[0],{241:function(e,t,A){},288:function(e,t){},290:function(e,t){},299:function(e,t){},301:function(e,t){},327:function(e,t){},329:function(e,t){},330:function(e,t){},335:function(e,t){},337:function(e,t){},356:function(e,t){},368:function(e,t){},371:function(e,t){},419:function(e,t,A){"use strict";A.r(t);var n=A(99),s=A(100),a=A(103),r=A(102),c=A(7),i=A.n(c),o=A(10),l=A(211),d=A(213),u=A(214),g=A(13),h=A.n(g),b=A(98),j=A.n(b),B=A(212),w=A.n(B),p=(A(241),A(101)),C=A.p+"static/media/apple-touch-icon.c9916e86.png",m=A.p+"static/media/google-sheets.242ec749.png",O=A(0),f=A(244).GoogleSpreadsheet;function Q(e){var t=e.column,A=t.filterValue,n=t.setFilter,s=t.preFilteredRows,a=t.id,r=h.a.useMemo((function(){var e=new Set;return s.forEach((function(t){e.add(t.values[a])})),Object(u.a)(e.values())}),[a,s]);return Object(O.jsxs)("select",{className:"select is-small",value:A,onChange:function(e){n(e.target.value||void 0)},children:[Object(O.jsx)("option",{value:"",children:"All"}),r.map((function(e,t){return Object(O.jsx)("option",{value:e,children:e},t)}))]})}function I(e){var t=e.column,A=t.filterValue,n=t.setFilter;return Object(O.jsx)("input",{className:"input is-small",value:A||"",onChange:function(e){return n(e.target.value)}})}function x(){var e=Object(g.useState)({headerValues:null,rows:[],isFetching:!1}),t=Object(d.a)(e,2),A=t[0],n=t[1];Object(g.useEffect)((function(){Object(l.a)(i.a.mark((function e(){var t,s,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(Object(o.a)(Object(o.a)({},A),{},{isFetching:!0})),(t=new f("1d-BFbtAcGfiXuq8gXOzNTfwwMQGRj28RhDs5Z2QEQ4k")).useApiKey("AIzaSyDWzk5MJLYVpzppXB9xxJWjVJnoe97erbc"),e.next=6,t.loadInfo();case 6:return s=t.sheetsByIndex[0],e.next=9,s.getRows();case 9:a=e.sent,n({headerValues:s.headerValues,rows:a,isFetching:!1}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0),n(Object(o.a)(Object(o.a)({},A),{},{isFetching:!1}));case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))()}),[]);var s=h.a.useMemo((function(){return A.isFetching||null==A.headerValues?[]:A.rows.map((function(e){return{RowNumber:e.rowNumber,Bringer:e.Bringer,FacebookPage:e["Facebook Page"],FacebookGroup:e["Facebook Group"],Frequency:e.Frequency,Name:e.Name,Venue:e.Venue,Latitude:e.Latitude,Longitude:e.Longitude,Weekday:e["Weekday / Month"],Address:e.Address,Indoor:e["Indoor / Outdoor"],BackOn:e["Back on"],Category:e["Event Category"],Level:e["Comedian Level"],Description:e["Event Description"],Website:e.Website}}))}),[A]),a=h.a.useMemo((function(){return A.isFetching||null==A.headerValues?[]:[{Header:"Back On",accessor:"BackOn",Filter:Q},{Header:"Name",accessor:"Name",Filter:I},{Header:"Bringer",accessor:"Bringer",Filter:Q},{Header:"Weekday",accessor:"Weekday",Filter:I},{Header:"Venue",accessor:"Venue",Filter:I},{Header:"Address",accessor:"Address",disableFilters:!0,hideInitially:!0},{Header:"Facebook Page",accessor:"FacebookPage",disableFilters:!0,Cell:function(e){var t=e.row;return Object(O.jsx)("a",{href:t.original.FacebookPage,children:t.original.FacebookPage})}},{Header:"Frequency",accessor:"Frequency",Filter:I},{Header:"Indoor?",accessor:"Indoor",hideInitially:!0,Filter:Q},{Header:"Category",accessor:"Category",hideInitially:!0,Filter:Q},{Header:"Level",accessor:"Level",hideInitially:!0,Filter:Q},{Header:"Website",accessor:"Website",hideInitially:!0,disableFilters:!0},{Header:"Description",accessor:"Description",hideInitially:!0,Filter:I},{Header:"Facebook Group",accessor:"FacebookGroup",hideInitially:!0,disableFilters:!0,Cell:function(e){var t=e.row;return Object(O.jsx)("a",{href:t.original.FacebookPage,children:t.original.FacebookPage})}}]}),[A]),r=Object(p.useTable)({columns:a,data:s,initialState:{hiddenColumns:a.filter((function(e){return e.hideInitially})).map((function(e){return e.Header}))}},p.useFilters),c=r.getTableProps,u=r.getTableBodyProps,b=r.headerGroups,j=r.rows,B=r.prepareRow,w=r.allColumns;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"columns is-multiline",children:[Object(O.jsx)("span",{className:"map column is-12-mobile is-5-desktop",children:Object(O.jsx)(E,{results:j})}),Object(O.jsxs)("span",{className:"table_wrapper column is-12-mobile is-7-desktop",children:[Object(O.jsxs)("div",{id:"table-dropdown",className:"dropdown",children:[Object(O.jsx)("div",{className:"dropdown-trigger",children:Object(O.jsx)("button",{className:"button",onClick:function(){return document.getElementById("table-dropdown").classList.toggle("is-active")},children:"Select columns \ud83d\udd3d"})}),Object(O.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:w.map((function(e){return Object(O.jsx)("div",{className:"dropdown-content",children:Object(O.jsxs)("label",{className:"checkbox",children:[Object(O.jsx)("input",Object(o.a)({type:"checkbox"},e.getToggleHiddenProps())),e.id]})},e.id)}))})]}),Object(O.jsxs)("table",Object(o.a)(Object(o.a)({className:"table is-hoverable"},c()),{},{children:[Object(O.jsx)("thead",{children:b.map((function(e){return Object(O.jsx)("tr",Object(o.a)(Object(o.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(O.jsxs)("th",Object(o.a)(Object(o.a)({},e.getHeaderProps()),{},{children:[e.render("Header"),Object(O.jsx)("div",{children:e.canFilter?e.render("Filter"):null})]}))}))}))}))}),Object(O.jsx)("tbody",Object(o.a)(Object(o.a)({},u()),{},{children:j.map((function(e){return B(e),Object(O.jsx)("tr",Object(o.a)(Object(o.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(O.jsx)("td",Object(o.a)(Object(o.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))]})]})})}var v=function(e){var t=e.name;return Object(O.jsx)("div",{style:{position:"relative",bottom:50,left:"-45px",textAlign:"center",width:220,backgroundColor:"white",boxShadow:"0 2px 7px 1px rgba(0, 0, 0, 0.3)",padding:10,fontSize:14,zIndex:100,borderRadius:"25px"},children:Object(O.jsx)("div",{style:{fontSize:16},children:t})})},D=function(e){Object(a.a)(A,e);var t=Object(r.a)(A);function A(e){return Object(n.a)(this,A),t.call(this,e)}return Object(s.a)(A,[{key:"render",value:function(){return Object(O.jsx)("div",{className:this.props.show?"has-background-warning":"has-background-primary-dark",style:{border:"1px solid white",borderRadius:"50%",height:20,width:20,zIndex:10,cursor:"pointer"},children:this.props.show&&Object(O.jsx)(v,{name:this.props.name})})}}]),A}(h.a.Component),E=function(e){Object(a.a)(A,e);var t=Object(r.a)(A);function A(e){var s;return Object(n.a)(this,A),(s=t.call(this,e))._onChildClick=function(e,t){s.setState((function(t){var A=t.results.findIndex((function(e){return e.show}));A>0&&t.results[A].original.RowNumber!=parseInt(e)&&(t.results[A].show=!1),A=t.results.findIndex((function(t){return t.original.RowNumber==parseInt(e)})),t.results[A].show=!t.results[A].show;for(var n=document.querySelectorAll("td"),s=null,a=0;a<n.length;a++)if(n[a].textContent==t.results[A].original.Name){s=n[a];break}return s.parentNode.style.backgroundColor="#fffcb3",setTimeout((function(){return s.parentNode.style.backgroundColor="white"}),2e3),s.scrollIntoView({behavior:"smooth",block:"nearest"}),{results:t.results}}))},s.state={results:[]},s}return Object(s.a)(A,[{key:"componentDidUpdate",value:function(e){this.props.results!=e.results&&this.setState((function(e,t){return{results:t.results.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{show:!1})}))}}))}},{key:"render",value:function(){return Object(O.jsx)("div",{id:"map",children:Object(O.jsx)(w.a,{bootstrapURLKeys:{key:"AIzaSyB2xTrXYV7Y6bN1BVVPrt2ZUglBPTZ-2S4"},defaultCenter:{lat:51.5074,lng:-.1178},defaultZoom:13,onChildClick:this._onChildClick,children:this.state.results.map((function(e){return Object(O.jsx)(D,{lat:e.original.Latitude,lng:e.original.Longitude,name:e.original.Name,show:e.show},e.original.RowNumber)}))})})}}]),A}(h.a.Component);function k(){var e=[{question:"My night's details are out of date! \u231a",answer:Object(O.jsxs)("p",{children:["Just ",Object(O.jsx)("a",{href:"https://tripetto.app/run/OVM6TIVBDN",children:"let us know"}),"! We'll fix it ASAP."]})},{question:"I have feedback to share / found a bug! \ud83d\udc1b",answer:Object(O.jsxs)("p",{children:["Good hunting \ud83d\ude04 Send us feedback ",Object(O.jsx)("a",{href:"https://tripetto.app/run/OVM6TIVBDN",children:"here"}),"."]})},{question:"How can I stay up to date with standup?",answer:Object(O.jsxs)("p",{children:["Join our ",Object(O.jsx)("a",{href:"https://www.facebook.com/groups/LondonStandUpComedyMap/",children:"Facebook Group"}),"! We'll be glad to have you \ud83d\ude0a"]})},{question:"How can I view the raw data of app?",answer:Object(O.jsxs)("p",{children:["Head to the ",Object(O.jsx)("a",{href:"https://docs.google.com/spreadsheets/d/1d-BFbtAcGfiXuq8gXOzNTfwwMQGRj28RhDs5Z2QEQ4k",children:"Google Sheet"})]})},Object(O.jsxs)("a",{className:"navbar-item",children:[Object(O.jsx)("img",{src:m}),"Sheet "]})];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("nav",{className:"navbar is-light has-shadow py-4 mb-2",children:[Object(O.jsxs)("div",{className:"navbar-brand",children:[Object(O.jsx)("a",{className:"navbar-item",children:Object(O.jsx)("img",{src:C,style:{maxHeight:"60px"}})}),Object(O.jsx)("div",{className:"navbar-item",children:Object(O.jsx)("p",{className:"title",children:"\ud83c\udf99Perform comedy near you"})}),Object(O.jsxs)("div",{className:"navbar-burger",onClick:function(){return document.getElementById("nav-links").classList.toggle("is-active")},children:[Object(O.jsx)("span",{}),Object(O.jsx)("span",{}),Object(O.jsx)("span",{})]})]}),Object(O.jsx)("div",{className:"navbar-menu",id:"nav-links",children:Object(O.jsxs)("div",{className:"navbar-end",children:[Object(O.jsxs)("a",{className:"navbar-item",href:"https://www.facebook.com/groups/LondonStandUpComedyMap",children:[Object(O.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAACXBIWXMAAAsSAAALEgHS3X78AAAAgVBMVEVHcEwYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/IYd/L///////////////////////////////////////8Yd/L////G3fxSmfWMu/nx9/41iPSpzPpDkfR9s/gmgPOaxPlgovZvqve31fvj7v3U5v3FDIqfAAAAGnRSTlMAMOCQEKBA8CDAgNBgcLBQwIBAcBDgkNAwUKADeJcAABCySURBVHja7Z3ZetU4EITlfbcTZpjFPktOdnj/B5xDYPgCnBBvklvVVZckF0H9u9VdLcvGaFGapk1ZRsVZYX9R4ZefRWXZnH/VUBiK064s3wz573TGoSy7NOYa+qn8/LwXVb+CquKcE3KuqEehL5OiX11FUhID6QrqqMh6i8qKqA64ziKf+y4qekcqoo65QNSD37Rh71hh2zAViAh+aTfp/35DKAnBxk/+ZsH/DgEzwUYNfpeEvRCFSUe7wG3F1xS9MBUN60JXiT8Ke5EKI24G1tVJjf7/DHSMkcVnP8l68coS5gFdmZ97gZOqr+q9UsWacEXVbe+h2pqRW+Xhj7LeU2UR08Dih7/ovVbBNKDz4WcaWK607UHU8ojhjNwf9kAKuRNMUlxmPZiykvOi0Vt/Ahf+rxYhi4Fx4e9hRQQUVX6sB+eEv+jhVRABzeEnAm/v/UrC/4IAawFNpR/Lwff7fmXhf0GAvgCw7UNrSK3pS4N4aulf9YpVaW8I8rZXrlZ1Nahz8/+5FNCb/UOG/6UUSJn9uQ+oU8Ps/3ofaJSFP6gY9J/6AU3vksQlA/6r9PhCLP5UF4NxxFC/pSjm488kwMefSYDFP9sBTOeX4R3VDqBafwVjO06YJ8Y6Wn/jjUG8m4ZY/emuBVn96a4Fa6b/6dsA0HmxhOGcowSl+mf6n7sNQHQDKdP//G0AwBmm+aPaFIq5/S8tBGJu/ywEvO3+uf2vUQh46wjUDN468tQRoPm7njHsY/nHY/+qS8GY5d+6paBnBAQ8+beyQq9KQZb/upsBDv+sEOBNM8D2T3c72DBStuTFK6R0/222g4w/CWD8SQDjTwJk2n989cOBCrGmIO1f3bYw46+bAMZfNwGMv3ICWP+5rQTZ/7EbZPxJAONPAhh/EsD5r1IJmQ7z/Mdmqhl/EsDzn5q1/UlRxl83ATHP/2+scFNTmAOA7bXpWIAGgG47gO//ilDEBpDN4CYNAFdeijZpBXI2gHKawZwNAFsBNgBsBRyK9z8Kk+MbJVOuuDSlLABZCDoTC0CJhSALQJva7+8OD7vd7jj8qvM/754Ph8Pdfr/XUAjqcgBv9ofTxbC/qRcaHvc3qI6gniMA94+HaaH/Scfd7nBwmBTcHA5Q4gDdPz58HtbSOSU87e9B/CANI8Dbu91gQbvT4fHW6h/uYDDY4Uf/4dNgU1b/+I4OwMKS785u9G0DYN0NwH4J+PF5sC+7/wXLrw0jjwDu7T/8DgCwOxQAPgNy83AcBgQAbJ4Owe0Ab06DM3ncC6J2gPeHYcABwF4viDoDPhwHKABsTYZB3wLafxoGMAAsvS0EuQHcPw8DHAB2NgHIDeDuOCACYGMTQNwANnj8HQFgYRMAtID2xwEVgPXtIEAL6GEYcAFY3Q6Cs4DudwM0ACufEIS7COz204ANwLpXiMENgR+PAzoAqw6G0T4E/TQM8AD0LS2AN73fQQMAK5oBYBbAadABQEgLQGL83QGwlhkAVgFuHX+HAKxUB7aMv6cArFMHYlWAT4MmAFapAyvG318AVvADod4EvT0qA2D5+6JQU+AbCfF3C8DiuTBUC/h5UAfA0lYwRmoBT4NCALJlKQDpLpCnQSMAy+4NyVkAeA9AnzMBCCoANgAgYQL4osOgFYAFKQDoXfDbQS8ABU3gvt8pBmC2IQyUAO4GzQAU6hPA/VE1ADNTAFACOA26ASiUJ4CbQTkAs1IAUALYqQegVe0B7Af1AMzwAhImACQAEiYA3QBMTgFMAGAAJGrPAUhLABsBMPFcANBBoBMBeNG0o0E4CeBmIABfU4DSo8APBOCbphwQBjoKfCQA3xSqdIGfBgIw3Q8GehtwRwCm+8FAJpC8EnBDAEabQUB3wt4RgFeK1PWAco4CiwAgU9cDStwBNgRgZCfIo4CwABTKSkCRO8CWAIwqAyPuALgARLpKwCcCML0MRLoR5JkATC8Dke4EOxKAyW4gUgm4HwjA5DIQ6V74AwH4Ve/dIo90KZzLQdBxdzoc9l90K3tRKkVfhnFVAuwO+3t/ViVQ821AJ1cCHE+Pni1LpOZieAcuwPOjf8sSqtkBrJ8GPN14uS6BkkuhbNeAzzeerkuiwwbue6vh/7T3dl1+Ywd3SPG3WgM+3Hu8Mp2O74M/Wiz9n7xemUjHx6Hs+YDHW79XJtTxfeAT4z+1D4DaAaw1Af7H/809AOvzgEfGf+IekEPF31YX+IiwNrmCL4Rb6gIfIBanQT8O3ts6DfIZY3EuHg+PsXYAO6OgW5DVidFtQEs2wAPK6nTogyA7ABzvUVYnwf9GvA0b4ACzOiG6DWgFAJwEcMkMbAjAuwdAgJanAf9IvJX3Qm+BlqfFPgtixQj8jLQ8GXoJYAGAO6j1CZA/Em0HgBuo9SmhfWAbAHzCWp8CvATo2QNMKgLgSoD1AXgCW6AA2gWwAMAN2AI10C6ABQDQFqhFHgRYuB9qh7ZCIfBpMBsZ4AS3QjnuWQAbABzgVqiDPRBuBYA7uBWKkG2g9QHYw63QayuoJwD6AOiRbSACMMkKqgmARgBq5BqQAEypAgsCoM4I/KEKzAiARgAyYB+QAIxRjvedSAIwRSnqcTACME4l5kthBGCsEuAmgABMaAN6AqATgB64CSAA49uAlABoBSAFPRBKAEaqwe0CCcD4PrAgAFoBKOC+E0UAJqnC7QIJwOg+MCYAegGIYbtAAjC6D+wIgF4AOtgukACM7gMJgHIACgKgF4CCABCAkADoBSCE9YEIwGgniADoBiAlAJoBSAkAASAAqgFoCIBmABpUI5AAjFNJALQDEBEAzQBEqE4wARinggAQAAJAAAiAXgBCAqAZgBB1FkQARooAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAHDiJ0UEQDcARwKgG4AdAdANwAMB0A3AgQDoBmBPAHQDcEMAdANAH0A3AJ8JgG4AngmAbgAOAgEICYA7PYlb51DqiyHsAt2oIAC6mwACoHsURACUj4LOAEQEQPEo6HxBREkANHeBJQFQ3QScAWgIgOJR0PmauJQAKO4C5d4UylEQAeAoyAkAhgAobgLkfi8AEYBHmQCEBEBvFxiK/WgUmwBHTjABcKZPQgEoCYDaUZDgL4dyFOQMgI4AuNGdwGXuxH4+nk2AKx/IxARA7Sioj41UJ4hdoCsfyJiKAGhtAqoXAAoCoHUUVLwAUBIAraOg8gWAhgBoHQU1LwCkBEBzF2hMTgC0NgH5CwCGACgdBX3tAmW2AewCnTUBxiQEQOcoKPkGQEkAdI6Cym8ApARAcxMgsw3gKMhdE2BMRgA0doHZ//GX2AawCXDXBBiJdwSgAXASCED0HYCaAGgcBdXfAQgIgMZRUPAdAEMAbOtWrhEsswpkE+CwBpRYBXIU5LAGlPhuALtA6+peAZATAH1NQP4KAHnviHMUZFvh6/iblgBoGwW1PwDQEACrupcHQPMDAAEB0NYFBj8AIG4gyCbA2ShQphXEUZBDG0jisTB2gZZV/gRAQAB0jYJ+KgHEFQEcBbktAcQ5AWwCXLoAAp0AjoJcugACiwB2gY5LAGnjADYBDgcBEl8Q4yjIqpILAHQEQM8oqLsAQEwA9IyC4gsAyHKDkeIv74OhxaX4y2oE2QS4bQLFXhUjhiCoxckvAiD02yEEwEkTKPQVQQJgQ9EbAAQEQAcAwRsAQO0BBGDyDoC1BxCAyTuA1I+HEAAHNqDcu2IIwNrK3o6/yBsDCYCzHQCqDyAAk3sArD6AAEzuAbD6AAIwYwdA2gMIwJwdQOgXpAjAeqp+H3+Z348hAOupeQeAnABgA5C/A4C8qyIIwJpq34u/xFtDCcB6qt8FAMUOJgCXlL0ffxQrgABMNwGgykACMKsEFPstYQKwhoox8QcpAwnAvBIQpgwkAPNKQJgykADMKwFhykACMLMERHEDCcAMF9AI/pIkAVisdDQACAeDCMDPCsfHH6ETJAAze0CUTpAAzOwB5X5QnAAsUjkJgDgjAFgAZPEkAPx/RYQA/KhkWvz9N4MIwEwTCCUFEIBFCcD/FEAAliUA7/1gAvBa7fT4++4HE4DXSmcA4PnJIALwSsWc+HueAgjA0gTgeQogAEsTgOcpgAAsTgB+NwIEYFEL4L8XQACWeAAAdiABmG8CQqQAArBCAvD5hDgB+KZoSfw9PhdAAL5q6jkAmKNBBOCrymXxN3FIAHwGIFyYAPw9IEwAXlSbxaoIgL8AVMvj76shTAAWmcD+u0EEYKEH9MoNygiAnwBk+SoA+NkKEoDlLaDX74oSgElvg+LVgQRgnQrQ24MBBKBdL/4+1oHqAVirAvT1Fnn1ADRmVVUEQJ8H6PW3ZLQDEKwMgHdmgHIAyrXj791cWDcAy6fA3psBugFIjQVFBMAXRTbi79kmoBkAGxuAd5uAZgBSY0kRAdC7AbxsAhUB8MACiq0B4JMdpBeAwFhUSQD0WUB+XhqhFYDCbvz9GQwrBWDdIfAldQRAsjpjXREB0NgBetcLqgTAZgf4qhfMCIDQAiAwTlQTAJmqjSMlBECiEuNMFQEQWAC4i78PboA6AOw7AH5NhtUBkBqnagiALDXGsRICoLQA9MQP0gWAGwfIq0JQFQBuC0A/ToeoAiAwm6gmAMocQJ8Gg4oAiMxmSgiAxgbAi1ZADQBbNAA+vC2kBYBw0/gLPhygBIAsMIYE6AVg+/iLbQZ1AFAbQwIUAyAi/kIngxoAaIwQJQRAmwEgnwB8AATFXyIB8ACIir9AAtABEBZ/efdJgwPQSou/uLEANgBVbEiAYgAkxl8aAcgAyIy/MAKAAZAa/zMBLQFwUP+Jjb+obhAWgMSIVkIAVMdfDgGgAIiPvxgCMAHwIP5SpsOQADTGC9UEwI5q44nqjACsr8yb+Is4KQoHgITznxMICAnAugq9ir8AWxgMgCo2nilOCMCK7Z938TdbvzsMBUBkvFRNAJS1f5KaARwAssB4q7wiAIvLv9x4rO1KQRQAvCz/JEwGQABojPdKMwIwe/tPDYC2KQQQAPB7+9/4iAAAAJGB0QbjQe8ByGoDpKAiABPTf2CgFEcEYFL6jw2auowAjE7/nQFUXhCAcSpyg6mSAIxRaWDlsBb0FgC06m+rQwK+AhAZcKUhAXhbYWrg5agh9BIAwOZvsyTgIQAaHv9vSaAkABeK/9jokf12wDcAwIv/CwdFMgLwyvprjDrlLQH4X21uNMpqMegRAHqKv1+94YwAZKVRrDzRDkCSG91KC80AFKmh6lArAGHN6H/1hTKNAGSqnB/n8wHxAEQMv9VqUDgA6ms/6wiIBoDht98QCAaApb8LBMQCwPD/HoEEG4CE4XdUC4gEgHv/SAQyRAAyht+lNSQNANo+jg1iWQDQ9J1TD7YoALSs/GYWAwt2AjEAZCW3/iU7QeE3AAVz/+I0EGW+ApBFfPhXUdf6CEDbMXLrpYGm8guAquHDv7KCKPQFgDAKGK+tGdgMAEZfBgPbAMDoO2GgkgkAo++wJiykAVCw6nOruEtCKQCEScdJzzaJoM22BiBr+ehvWxG8AYELAM7B564vBILQNQAhgy9sO+jKwhUARdkx7ctMBXVZZDYByIqy5oMvPRekZVKsD0CRlCmfe3/054c/rq/+XiP0f19d//HhT66orxz8e319dfVxetw/Xl1dX//LyMPonw/nnHD919XVmzh8/PKzv67Pz/uHf9Qsy39xc22cs0cLDwAAAABJRU5ErkJggg=="}),"Join our Facebook Group"]}),Object(O.jsx)("a",{className:"navbar-item",href:"https://tripetto.app/run/OVM6TIVBDN",children:"\ud83d\ude4f Submit feedback \ud83d\ude4f"})]})})]}),Object(O.jsx)(x,{}),Object(O.jsx)("div",{className:"section",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"columns is-vcentered",children:e.map((function(e){return Object(O.jsx)("div",{className:"column",children:Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)("div",{className:"card-header",children:Object(O.jsx)("div",{className:"card-header-title",children:e.question})}),Object(O.jsx)("div",{className:"card-content",children:Object(O.jsx)("div",{className:"content",children:e.answer})})]})},e.question)}))}),Object(O.jsxs)("p",{className:"has-text-centered my-2 mx-2",children:["Website created with \u2764 by ",Object(O.jsx)("a",{href:"https://apuchitnis.github.io/",children:"@apuchitnis"}),". Thanks to ",Object(O.jsx)("a",{href:"https://gaelleconstantcomedian.com/",children:"Gaelle Constant"})," for maintaining the ",Object(O.jsx)("a",{href:"https://www.facebook.com/GaelleConstantComedian",children:"original spreadsheet"}),"."]})]})})]})}var F=document.getElementById("app");j.a.render(Object(O.jsx)(k,{}),F)},95:function(e,t){}},[[419,1,2]]]);
//# sourceMappingURL=main.b47f6794.chunk.js.map