const connect = () => {
    let db
    const connection = indexedDB.open("jobseekers-organizer-db", 1);

    connection.onerror = (event) => {
        console.error("Failed to connect to database");
    }

    connection.onsuccess = (event) => {
        return db = event.target.result;
    }
    
    connection.onupgradeneeded = (event) => {
        db = event.target.result;

        const objectStore = db.createObjectStore("applications", { autoIncrement : true });

        objectStore.createIndex("title", "title", { unique: false })
        objectStore.createIndex("companyname", "companyname", { unique: false })
        objectStore.createIndex("contactname", "contactname", { unique: false })
        objectStore.createIndex("contactemail", "contactemail", { unique: false })
        objectStore.createIndex("dateapplied", "dateapplied", { unique: false })
        objectStore.createIndex("jobboardname", "jobboardname", { unique: false })
        objectStore.createIndex("coverletter", "coverletter", { unique: false })

        // objectStore.transaction.oncomplete = (event) => {
        //     const applicationObjectStore = db.transaction("applications", "readwrite").objectStore("applications")
        //     dummydata.forEach((application) => {
        //         applicationObjectStore.add(application)
        //     })
        // }
    }
}

export { connect }