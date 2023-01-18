﻿using WebApiFood.Core.Models.Dtos;
using WebApiFood.Core.Models.Dtos.UserDtos;
using WebApiFood.Entities;
using WebApiFood.Repositories;

namespace WebApiFood.Core.Interfaces
{
    public interface ICustomerBusiness
    {
        Task<Response<bool>> Create(RgCustomerDto rgCustomerDto);
        Task<Response<bool>> Update(UpdateCustomerDto Entity, int iduser);
        Task<IEnumerable<User>> GetAll();
        Task<User> GetById(int id);
        Task<bool> Delete(User Entity);
        Task<Response<string>> loginUser(LoginDto user);

    }
}
