const idbPromise = (storeName, method, object) => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('jobseekers-organizer-db', 1)
        let db, tx, store

        request.onupgradeneeded = e => {
            const db = request.result
            db.createObjectStore('applications', { autoIncrement: true })
        }

        request.onerror = e => {
            console.log('Error opening indexedDB')
        }

        request.onsuccess = e => {
            db = request.result

            tx = db.transaction(storeName, 'readwrite')
            store = tx.objectStore(storeName)

            db.onerror = e => {
                console.log("error: ", e)
            }
            
            switch(method) {
                case 'put':
                    store.put(object)
                    resolve(object)
                    break
                case 'get':
                    const all = store.getAll()
                    all.onsuccess = () => {
                        resolve(all.result)
                    }
                    break
                case 'delete':
                    store.delete(object.id)
                    break
                default:
                    console.log('No valid method')
                    break
            }

            tx.oncomplete = () => {
                db.close()
            }
        }
    })
}

export { idbPromise }