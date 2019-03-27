package com.zcsoft.rc.bms.mileage.service;


import com.sharingif.cube.support.service.base.IBaseService;
import com.zcsoft.rc.bms.api.mileage.entity.*;
import com.zcsoft.rc.mileage.model.entity.Mileage;


public interface MileageService extends IBaseService<Mileage, java.lang.String> {

    /**
     * 里程添加
     * @param req
     * @return
     */
    MileageAddRsp add(MileageAddReq req);

    /**
     * 里程删除
     * @param req
     * @return
     */
    MileageDeteleRsp delete(MileageDeteleReq req);

    /**
     * 里程修改
     * @param req
     * @return
     */
    MileageUpdateRsp update(MileageUpdateReq req);
	
}