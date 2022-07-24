//응급의료기관 기본정보 조회
//병원명, 응급실(가능/불가능), 응급실 전화, 진료 과목, 주소, 병원 위도경도, 간이약도 알려줌

import { Router } from "express";
import axios from "axios";

const router = Router();



// https://apis.data.go.kr/B552657/ErmctInfoInqireService/getEgytBassInfoInqire?serviceKey=LBA6ZvJga4V9d4MbIq9Xqr5YbiBzr4HTV05Q0anAg49HDCJz5yna4ow1LqEKAbKZS3qZQYtlrGJp9xqF080oiQ%3D%3D&HPID=A0000028&pageNo=1&numOfRows=10
router.get('/', (req, res) => {
    
    let api = async() => {
        let response = null;
        response = await axios.get("http://apis.data.go.kr/B552657/ErmctInfoInqireService/getEgytBassInfoInqire", {
            params: {
                "serviceKey": "LBA6ZvJga4V9d4MbIq9Xqr5YbiBzr4HTV05Q0anAg49HDCJz5yna4ow1LqEKAbKZS3qZQYtlrGJp9xqF080oiQ==",
                "HPID": req.query.HPID,
                "pageNo": req.query.pageNo,
                "numOfRows": req.query.numOfRows
            }
        })
        return response;
    }
    api().then((response) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        let item = response.data.response.body.items.item;
        if(item.dutyEryn === 1) {
        res.json("병원명: " + item.dutyName + " " + "응급실 번호: " + item.dutyTel3
                    + " " + "주소: " + item.dutyAddr + " " + "간이 약도: " + item.dutyMapimg
                    + " " + "진료과목: " + item.dgidIdName + " " 
                    + "병원 위도 " + item.wgs84Lat + " " + "병원 경도 " + item.wgs84Lon
                    + "응급실 운영 여부 : Yes");

        }
        else {
            res.json("병원명: " + item.dutyName + " " + "응급실 번호: " + item.dutyTel3
                    + " " + "주소: " + item.dutyAddr + " " + "간이 약도: " + item.dutyMapimg
                    + " " + "진료과목: " + item.dgidIdName + " " 
                    + "병원 위도 " + item.wgs84Lat + " " + "병원 경도 " + item.wgs84Lon
                    + "응급실 운영 여부 : No");
        }
        
        //if(item.)

        //res.json(response.data.response.body.items.item[0].dutyName + ' ' + response.data.response.body.items.item[1].dutyName);


        //console.log("병원명: " + item.dutyName);
        //console.log(response.data.response.body.items.item.dgidIdName);
        
    });

    
});






export default router;