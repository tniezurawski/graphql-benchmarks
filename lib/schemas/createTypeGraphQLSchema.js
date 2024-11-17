var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import 'reflect-metadata';
import { buildSchema, Resolver, Query, ObjectType, Field, Int, ID, FieldResolver, Root, } from 'type-graphql';
import { data } from '../data.js';
import md5 from 'md5';
let Book = class Book {
};
__decorate([
    Field(() => ID),
    __metadata("design:type", String)
], Book.prototype, "id", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], Book.prototype, "name", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], Book.prototype, "genre", void 0);
__decorate([
    Field(() => Int),
    __metadata("design:type", Number)
], Book.prototype, "numPages", void 0);
Book = __decorate([
    ObjectType()
], Book);
let Author = class Author {
};
__decorate([
    Field(() => ID),
    __metadata("design:type", String)
], Author.prototype, "id", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], Author.prototype, "firstName", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], Author.prototype, "lastName", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], Author.prototype, "fullName", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], Author.prototype, "md5", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], Author.prototype, "company", void 0);
__decorate([
    Field(() => [Book]),
    __metadata("design:type", Array)
], Author.prototype, "books", void 0);
Author = __decorate([
    ObjectType()
], Author);
let SimpleResolver = class SimpleResolver {
    fullName(root) {
        return root.firstName + ' ' + root.lastName;
    }
    md5(root) {
        return md5(root.firstName);
    }
    authors() {
        return data;
    }
};
__decorate([
    FieldResolver(),
    __param(0, Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Author]),
    __metadata("design:returntype", void 0)
], SimpleResolver.prototype, "fullName", null);
__decorate([
    FieldResolver(),
    __param(0, Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Author]),
    __metadata("design:returntype", void 0)
], SimpleResolver.prototype, "md5", null);
__decorate([
    Query(() => [Author]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SimpleResolver.prototype, "authors", null);
SimpleResolver = __decorate([
    Resolver(Author)
], SimpleResolver);
let AsyncResolver = class AsyncResolver {
    fullName(root) {
        return root.firstName + ' ' + root.lastName;
    }
    md5(root) {
        return md5(root.firstName);
    }
    authors() {
        return __awaiter(this, void 0, void 0, function* () {
            return data;
        });
    }
};
__decorate([
    FieldResolver(),
    __param(0, Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Author]),
    __metadata("design:returntype", void 0)
], AsyncResolver.prototype, "fullName", null);
__decorate([
    FieldResolver(),
    __param(0, Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Author]),
    __metadata("design:returntype", void 0)
], AsyncResolver.prototype, "md5", null);
__decorate([
    Query(() => [Author]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AsyncResolver.prototype, "authors", null);
AsyncResolver = __decorate([
    Resolver(Author)
], AsyncResolver);
export function createTypeGraphQLSchema() {
    return buildSchema({
        resolvers: [SimpleResolver],
    });
}
export function createAsyncTypeGraphQLSchema() {
    return buildSchema({
        resolvers: [AsyncResolver],
    });
}
//# sourceMappingURL=createTypeGraphQLSchema.js.map