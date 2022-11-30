namespace WebApiFood.ConfigStarup.Corss
{
    public static class Feature
    {
        public static IServiceCollection AddFeature(this IServiceCollection services, IConfiguration configuration)
        {
            string myPolicy = "policyApiEcommerce";
            services.AddCors(options =>
                         options.AddPolicy(myPolicy, Policybuilder =>
                                                     Policybuilder.AllowAnyOrigin()
                                                                   .AllowAnyHeader()
                                                                   .AllowAnyMethod()));
            return services;
        }
    }
}
