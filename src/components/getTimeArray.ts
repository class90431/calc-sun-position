/**
 * 
 * @param begin "yyyy-MM-dd"
 * @param end "yyyy-MM-dd"
 * @param interval 相隔分鐘
 * @reference https://blog.csdn.net/qq_33477377/article/details/100162237?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_title-7&spm=1001.2101.3001.4242
 */
export function getTimeArray(begin: string, end: string, interval: number) {
    let arr: Array<string> = []
    let beginDate: any
    let endDate: any
    let msCount: number
    beginDate = new Date(begin + " 00:00")
    endDate = new Date(end + " 23:59")
    msCount = interval * 60 * 1000  //30分鐘 10分鐘 5分鐘 15分鐘
    var beginMs: number = beginDate.getTime()
    var endMs = endDate.getTime()
    for (var i = beginMs; i <= endMs; i += msCount) {
        // arr.push(moment(new Date(i)).format('YYYY-MM-DD HH:mm'))
        const temp: any = new Date(i)
        arr.push(temp)
    }
    return arr
}