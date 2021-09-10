import moment from "moment"
const Plugin = function (Alpine) {
    Alpine.magic('moment',() => { return value => moment(value) })
}

export default  Plugin
