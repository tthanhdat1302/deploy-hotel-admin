import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Table,Button } from 'reactstrap';

export default function Index(){

    const [hotelList,setHotelList]=useState([]);
    const history=useHistory();

    useEffect(()=>{
        Axios.get("https://deploy-hotel-api.herokuapp.com/hotel/get").then((resopne)=>{
            setHotelList(resopne.data);
        });
    },[]);

    const deleteHotel=(id)=>{
        Axios.delete("https://deploy-hotel-api.herokuapp.com/hotel/delete/"+id).then(()=>{
            setHotelList(hotelList.filter(x=>x.MaKhachSan!=id))
        })
    }
    
    const createHotel=()=>{
        history.push('/hotel/create')
    }

    const updateHotel=(id)=>{
        history.push('/hotel/update/'+id)
    }
   
    return(
        <div style={{padding:'0 50px 0 50px'}}>
            <h3 style={{margin:'10px 0 10px 0'}}>Tất Cả Khách Sạn</h3>
            {/* <Button color="info" onClick={createHotel} style={{marginBottom:'15px'}}>Thêm Khách Sạn</Button> */}
            <Table bordered>
                <thead>
                    <tr>
                        <th>Mã Khách Sạn</th>
                        <th>Tên Khách Sạn</th>
                        <th>Địa Chỉ</th>
                        <th>Mô Tả</th>
                        <th>Giá Tối Thiểu</th>
                        <th>Hình Ảnh Khách Sạn</th>
                        <th>Tình Trạng</th>
                        <th>Thành Phố</th>
                        <th></th>
                        <th></th>
                        {/* <th></th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        hotelList.map(hotel=>
                            <tr>                              
                                <th>{hotel.MaKhachSan}</th>
                                <td>{hotel.TenKhachSan}</td> 
                                <td>{hotel.DiaChi}</td>
                                <td>{hotel.MoTa}</td> 
                                <td>{hotel.GiaToiThieu}</td> 
                                <td>{hotel.ImageKhachSan}</td> 
                                <td>{hotel.TinhTrang}</td>                  
                                <td>{hotel.MaThanhPho}</td>  
                                {/* <td style={{width:'115px'}}><Button color="success" onClick={()=>updateHotel(hotel.MaKhachSan)}>Cập nhật</Button>{' '}</td> */}
                                <td style={{width:'133px'}}><Button color="info" onClick={()=>history.push(`/hotel/${hotel.MaKhachSan}/room`)}>Xem Phòng</Button>{' '}</td>
                                <td><Button color="danger" onClick={()=>deleteHotel(hotel.MaKhachSan)}>Xóa</Button>{' '}</td>
                            </tr>    
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}