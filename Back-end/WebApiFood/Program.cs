
using System.Text.Json.Serialization;
using WebApiFood.ConfigStarup.Authentication;
using WebApiFood.ConfigStarup.Automapper;
using WebApiFood.ConfigStarup.Connection;
using WebApiFood.ConfigStarup.Corss;
using WebApiFood.ConfigStarup.Services;
using WebApiFood.ConfigStarup.Swagger;

var builder = WebApplication.CreateBuilder(args);
string myPolicy = "policyApiEcommerce";
builder.Services.AddContext(builder.Configuration);
// Add services to the container.
builder.Services.AddInyections();
builder.Services.AddMapper();
builder.Services.AddControllers().AddJsonOptions(x =>
                x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);

builder.Services.AddAuth0(builder.Configuration);
builder.Services.AddFeature(builder.Configuration);
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwagger();
builder.Services.AddHttpContextAccessor();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors(myPolicy);
app.UseStaticFiles();
app.UseAuthentication();
app.UseAuthorization();


app.MapControllers();

app.Run();
