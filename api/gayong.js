//실시간 가용병상정보 조회
import { Router } from "express";
import axios from "axios";

const router = Router();



// https://apis.data.go.kr/B552657/ErmctInfoInqireService/getEmrrmRltmUsefulSckbdInfoInqire?serviceKey=LBA6ZvJga4V9d4MbIq9Xqr5YbiBzr4HTV05Q0anAg49HDCJz5yna4ow1LqEKAbKZS3qZQYtlrGJp9xqF080oiQ%3D%3D&STAGE1=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C&STAGE2=%EA%B0%95%EB%82%A8%EA%B5%AC&pageNo=1&numOfRows=10
router.get('/', (req, res) => {
    
    let api = async() => {
        let response = null;
        response = await axios.get("http://apis.data.go.kr/B552657/ErmctInfoInqireService/getEmrrmRltmUsefulSckbdInfoInqire", {
            params: {
                "serviceKey": "LBA6ZvJga4V9d4MbIq9Xqr5YbiBzr4HTV05Q0anAg49HDCJz5yna4ow1LqEKAbKZS3qZQYtlrGJp9xqF080oiQ==",
                "STAGE1": req.query.STAGE1,
                "STAGE2": req.query.STAGE2,
                "pageNo": req.query.pageNo,
                "numOfRows": req.query.numOfRows
            }
        })
        return response;
    }
    api().then((response) => {
        res.setHeader("Access-Control-Allow-Origin", "*");

        let item2 = response.data.response.body.items.item;
        res.json("1. 병원명: " + item2[0].dutyName + "기관코드: " + item2[0].hpid
                + " 2. 병원명: " + item2[1].dutyName + "기관코드: " + item2[1].hpid
                );
        //res.json(response.data.response.body.items.item[0].dutyName + ' ' + response.data.response.body.items.item[1].dutyName);
        console.log(response.data.response.body.items.item[0].dutyName);
        
        
    });

    
});






export default router;