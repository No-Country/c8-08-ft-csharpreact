
using WebApiFood.ConfigStarup.Automapper;
using WebApiFood.ConfigStarup.Connection;
using WebApiFood.ConfigStarup.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddContext(builder.Configuration);
// Add services to the container.
builder.Services.AddInyections();
builder.Services.AddMapper();
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddHttpContextAccessor();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseAuthorization();

app.MapControllers();

app.Run();
