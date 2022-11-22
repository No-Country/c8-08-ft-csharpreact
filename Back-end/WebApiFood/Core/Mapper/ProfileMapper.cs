using AutoMapper;
using WebApiFood.Entities;
using WebApiFood.Core.Models.Dtos;
namespace WebApiFood.Core.Mapper
{
    public class ProfileMapper:Profile
    {
        public ProfileMapper()
        {
            CreateMap<User,UserDto>().ReverseMap();
            CreateMap<CustomerDto, Customer>().ReverseMap();
            CreateMap<RgCustomerDto,UserDto >().ReverseMap().ForMember(x=>x.UrlPhoto,option=>option.Ignore());
            CreateMap<RgCustomerDto, CustomerDto>().ReverseMap().ForMember(x => x.UrlPhoto, option => option.Ignore());
            CreateMap<SellerDto, Seller>().ReverseMap();
            CreateMap<RgSellerDto, SellerDto>().ReverseMap().ForMember(x => x.UrlPhoto, option => option.Ignore());
            CreateMap<RgSellerDto, UserDto>().ReverseMap().ForMember(x => x.UrlPhoto, option => option.Ignore());
            CreateMap<RgBusinessDto, Busines>().ReverseMap().ForMember(x => x.Img, option => option.Ignore());
            CreateMap<RgDishDto, Dish>().ReverseMap().ForMember(x => x.img, option => option.Ignore());
            CreateMap<RgCommentDto, Comment>().ReverseMap();
            CreateMap<ScoreDishDto, ScoreDish>().ReverseMap();
            CreateMap<ScoreBusinesDto, ScoreBusiness>().ReverseMap();
            CreateMap<ReservationDto, Reservation>().ReverseMap();
        }
    }
}
