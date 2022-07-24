//응급의료기관 목록정보 조회
import { Router } from "express";
import axios from "axios";

const router = Router();



// https://apis.data.go.kr/B552657/ErmctInfoInqireService/getEgytListInfoInqire?serviceKey=LBA6ZvJga4V9d4MbIq9Xqr5YbiBzr4HTV05Q0anAg49HDCJz5yna4ow1LqEKAbKZS3qZQYtlrGJp9xqF080oiQ%3D%3D&Q0=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C&pageNo=1&numOfRows=100&QD=D002
router.get('/', (req, res) => {
    
    let api = async() => {
        let response = null;
        response = await axios.get("http://apis.data.go.kr/B552657/ErmctInfoInqireService/getEgytListInfoInqire", {
            params: {
                "serviceKey": "LBA6ZvJga4V9d4MbIq9Xqr5YbiBzr4HTV05Q0anAg49HDCJz5yna4ow1LqEKAbKZS3qZQYtlrGJp9xqF080oiQ==",
                "Q0": req.query.Q0,
                "Q1": req.query.Q1,
                "QD": req.query.QD,
                "pageNo": req.query.pageNo,
                "numOfRows": req.query.numOfRows
            }
        })
        return response;
    }
    api().then((response) => {
        res.setHeader("Access-Control-Allow-Origin", "*");

        //let item2 = response.data.response.body.items.item;
        res.json(response.data.response.body);
        //res.json(response.data.response.body.items.item[0].dutyName + ' ' + response.data.response.body.items.item[1].dutyName);
        
        
        
    });

    
});






export default router;