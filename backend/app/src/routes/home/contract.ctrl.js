"use strict";

const Contract = require("../../model/Contract"); // 계약서 클래스 로드

// GET 요청
const output = {

};

// POST 요청
const process = {
    contract_view: async (req, res) => { // 계약서 보기
        const contractData = new Contract(req.body); // 계약서 객체 생성 
        const contract_res = await contractData.view_contract(); // 계약서 데이터 요청

        return res.send(contract_res); // 계약서 데이터 반환
    },
    contract_add: async (req, res) => { // 계약서 작성
        const contractData = new Contract(req.body); // 계약서 객체 생성 
        const contract_res = await contractData.add_contract(); // 계약서 생성 요청

        return res.send(contract_res); // 생성 결과 반환
    },
    contract_upd: async (req, res) => { // 계약서 수정
        const contractData = new Contract(req.body);
        const contract_res = await contractData.update_contract(); // 계약서 수정 요청

        return res.send(contract_res); // 수정 결과 반환
    },
    contract_del: async (req, res) => { // 계약서 삭제
        const contractData = new Contract(req.body);
        const contract_res = await contractData.delete_contract(); // 계약서 삭제 요청

        return res.send(contract_res); // 삭제 결과 반환
    },

};

module.exports = {
    output,
    process,
}