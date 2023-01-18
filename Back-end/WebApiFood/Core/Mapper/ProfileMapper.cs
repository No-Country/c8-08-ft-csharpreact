using AutoMapper;
using WebApiFood.Entities;
using WebApiFood.Core.Models.Dtos;
using WebApiFood.Core.Models.Dtos.UserDtos;
using WebApiFood.Core.Models.Dtos.BusinesDtos;
using WebApiFood.Core.Models.Dtos.DishDtos;
using WebApiFood.Core.Models.Dtos.CommentDtos;
using WebApiFood.Core.Models.Dtos.ReservationDtos;

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
            CreateMap<UpdateBusinesDto, Busines>().ReverseMap().ForMember(x => x.Img, option => option.Ignore());
            CreateMap<RgDishDto, Dish>().ReverseMap().ForMember(x => x.img, option => option.Ignore());
            CreateMap<RgCommentDto, Comment>().ReverseMap();
            CreateMap<ScoreBusinesDto, ScoreBusiness>().ReverseMap();
            CreateMap<ReservationDto, Reservation>().ReverseMap();
            CreateMap<Busines, ListaBusinesDto>().ReverseMap();
            CreateMap<User, GetUserDto>().ReverseMap();
            CreateMap<Seller, GetUserDto>().ReverseMap();
            CreateMap<Role, RoleDto>().ReverseMap();
            CreateMap<ListaBusinesDto, Busines>().ReverseMap();
            CreateMap<ScoreBusiness, ScoreBusinesDto>().ReverseMap();
            CreateMap<PictureBusinesDto, PictureBusiness>().ReverseMap();
            CreateMap<PictureDishDto, PictureDish>().ReverseMap();
            CreateMap<ScoreDish, ScoreDishDto>().ReverseMap();
            CreateMap<GetDishDto, Dish>().ReverseMap();
            CreateMap<GetCommentDto,Comment>().ReverseMap();
            CreateMap<GetResCustomerDto, Reservation>().ReverseMap();
            CreateMap<GetResSellerDto, Reservation>().ReverseMap();
            CreateMap<CustomerDto, User>().ReverseMap();
            CreateMap<UpdateDto, Dish>().ReverseMap();
            CreateMap<UpdateSellerDto, Seller>().ReverseMap().ForMember(x=>x.UrlPhoto,option=>option.Ignore());
            CreateMap<UpdateCustomerDto, Customer>().ReverseMap().ForMember(x => x.UrlPhoto, option => option.Ignore());

        }
    }
}
