to start the project.
#for installation
1.first load the project into vs-code
2.go to terminal and hit cmd 'npm i'
#for run the web app
1.) go to terminal and hit cmd 'npm start'
2.) to stop the server cmd 'ctrl+c'

react before 16
---
 Why we use components ?
 component --(class,function)========== high order component(HOC)  component return anotherComponent
    --login,layout,privateLayout
 only can be used in functional components
   hooks useEffect,useState,useCallback,useMemo
    customHook
    --lifecycle
        mount
            useEffect(()=>{
                console.log("Mount);
            },[])
        update
            useEffect(()=>{
                console.log("Update");
            },[item])
            // dependency
        unmount
            useEffect(()=>{
                return ()=>{
                    console.log("UnMount);
                }
            },[])
//ecma6
    // rest operator // spreadOpreator

  var result = {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  };
 var title = result.title
 var url = result.url
 var firstItem = result[0]
 const {title : Title,url : Url,...rest} = result
 const [firstItem,secondItem,...rest,lastItem] = result

abc(url)

    <!-- [{},{}] -->
Components
    -- Layout
    -- form
    -- button
    --- label
    --- image
    --- Breadcrumb
    --- Popup
Pages
    -- ContactUs
        --Layout
            -- breadcrumb
            -- image
            -- form