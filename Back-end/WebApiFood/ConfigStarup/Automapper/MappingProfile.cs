using AutoMapper;
using WebApiFood.Core.Mapper;

namespace WebApiFood.ConfigStarup.Automapper
{
    public static class MappingProfile
    {
        public static IServiceCollection AddMapper(this IServiceCollection service)
        {
            var configMapper = new MapperConfiguration(cf => cf.AddProfile(new ProfileMapper()));
            IMapper mapper = configMapper.CreateMapper();
            service.AddSingleton(mapper);
            return service;
        }
    }
}
