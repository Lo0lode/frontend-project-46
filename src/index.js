import _ from 'lodash'
import fs from 'fs'
import path from 'path'


export default function showDiff(filepath1,filepath2){
    const readFile1 = fs.readFileSync(filepath1)
    const readFile2 = fs.readFileSync(filepath2)
    console.log('ss   ' +readFile1 + '    ss')
}
    