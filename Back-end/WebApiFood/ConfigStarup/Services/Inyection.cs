using WebApiFood.Core.Business;
using WebApiFood.Core.Interfaces;
using WebApiFood.HandlerArch;
using WebApiFood.Repositories;
using WebApiFood.Repositories.Interfaces;


namespace WebApiFood.ConfigStarup.Services
{
    public static class Inyection
    {
        public static IServiceCollection AddInyections( this IServiceCollection services)
        {
          
            services.AddScoped<ICustomerBusiness, CustomerBusiness>();
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<ISellerBusiness, SellerBusiness>();
            services.AddScoped<IBusinesBusiness, BusinesBusiness>();
            services.AddScoped<IBusinessRepository, BusinessRepository>();
            services.AddScoped<IDishBusiness, DishBusiness>();
            services.AddScoped<IDishRepository, DishRepository>();
            services.AddScoped<ICommentBusiness, CommentBusiness>();
            services.AddScoped<IScoreBusinesBusiness, ScoreBusinesBusiness>();
            services.AddScoped<IScoreDishBusiness, ScoreDishBusiness>();
            services.AddScoped<IUserBusiness, UserBusiness>();
            services.AddScoped<IResevationBusiness, ReservationBusiness>();
            services.AddScoped<IHandlerArch, HandlerArchivos>();
            services.AddScoped<IReservationRepository, ReservationRepository>();
            services.AddScoped<IPictureDishRepository, PictureDishRepository>();
            return services;
        }
    }
}
