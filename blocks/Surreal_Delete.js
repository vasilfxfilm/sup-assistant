module.exports = {
    name: "Delete",

    description: "A block that will delete a row from the specified table for your Surreal database.\n(If row name is provided it will create a row with format of \"TBL:ROW\")\n",

    category: "SurrealDB",

    auto_execute: false,

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"],
        },
        {
            "id": "surrealconn",
            "name": "Surreal Connection Object",
            "description": "SurrealDB Connection Object (**Use Surreal Connect block to make this object.**)",
            "types": ["object"],
            "required": true
        },
        {
            "id": "rowprefix",
            "name": "Table name",
            "description": "Name of table to edit. Ex. \"Staff\" or \"User\"\n",
            "types": ["text"],
            "required": true
        },
        {
            "id": "rowname",
            "name": "Row Name",
            "description": "Description: The name of the row in specified namespace/db. Ex. \"User UUID\" or \"Guild UUID\"\n(**This is recommended but not required**)",
            "types": ["unspecified","text","number"],
            "required": false
        }
    ],

    options: [],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the next block if your insert was successful.",
            "types": ["action"]
        },
        {
            "id": "actionawait",
            "name": "Action Async",
            "description": "Type: Action\n\nDescription: Executes the next block if your insert was successful. (Async/Await result)",
            "types": ["action"]
        },
        {
            "id": "surrealconn",
            "name": "Surreal Connection Object",
            "description": "Type: Object\n\nDescription: SurrealDB Connection Object (user Surreal Connect block to make this object.)",
            "types": ["object"]
        },
        {
            "id": "result",
            "name": "Query Status",
            "description": "Type: Text\n\nDescription: Gives the result text returned from Surreal Query.",
            "types": ["text"]
        }
    ],
    async code(cache) {

        const SurrealDB = require("surrealdb.js").default;
        //console.log("create surrealdb import/require")
        const m_surrealconn = this.GetInputValue("surrealconn", cache)
        const m_tblname = this.GetInputValue("rowprefix", cache)
        const m_rowname = this.GetInputValue("rowname", cache)
        //const m_inputdata = this.GetInputValue("inserteddata", cache)

        const pool = new SurrealDB(m_surrealconn.host)

        //console.log("created pool connection")
        var result = (async function () {
            try {
                await pool.signin({
                    NS: m_surrealconn.namespace,
                    user: m_surrealconn.username,
                    pass: m_surrealconn.password
                })
                await pool.use(`${m_surrealconn.namespace}`,`${m_surrealconn.database}`)
                await pool.wait()
                const r = await pool.query(`DELETE ${m_tblname}:${m_rowname};`,{})
                //console.log('SURREAL ENTRY', await r[0])
                return r;
            }
            catch (e) {
                console.error('ERROR',e);
            }
        })()
        
        //console.log("ran query and got result");
        //console.log("deleting pool instance");
        //console.log(await result)
        
        this.StoreOutputValue(m_surrealconn, "surrealconn", cache);
        //this.StoreOutputValue(m_inputdata, "inserteddata", cache);
        delete await pool;
        result.then(((r) => {
            this.StoreOutputValue(r[0].status, "result", cache);
            this.RunNextBlock("actionawait",cache);
        }), ((e) => {
            this.StoreOutputValue(e,"result",cache);
            this.RunNextBlock("actionwait",cache);   
        }))
        this.RunNextBlock("action", cache);
    }
}