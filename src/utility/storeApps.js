const getAllApps =()=>{
    const apps = localStorage.getItem('myApps')
    if (apps) {
        return JSON.parse(apps);  ;
    }
    else {
        return []
    }
}

const saveTheApp =(id)=>{
    const allApps = getAllApps()
    // console.log(allApps)
    const exits = allApps.includes(id)
    if(exits) {
        return {success: false, message: "Already Installed"}
    }
    // const updatedApps = [...allApps, id];
    allApps.push(id)
    localStorage.setItem('myApps', JSON.stringify(allApps));
    return {success: true, message: "Successfully Installed"}
}

const unInstallTheApp =(id)=>{
    // console.log(String(id))
    const allApp = getAllApps()
    // console.log("before:", allApp)
    const updatedApps = allApp.filter(appId => appId !== String(id));
    // console.log("after:", updatedApps)

  // Save updated array back to localStorage
  localStorage.setItem('myApps', JSON.stringify(updatedApps));
  return {success: true, message: "The app has been uninstalled."}
}

export {getAllApps, saveTheApp, unInstallTheApp}