export default {
    data() {
        return {
            chartsInfo: [],
            name: '',
        }
    },
    methods: {
        chart(val) {
            let EchartsObject = this.$echarts.init(
                document.getElementById(`${this.name}-${val.id}`)
            )
            const option = this.getOption(val)
            EchartsObject.setOption(option)
        },
    },
}
