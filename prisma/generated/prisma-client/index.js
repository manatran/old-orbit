"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Submission",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  },
  {
    name: "Challenge",
    embedded: false
  },
  {
    name: "Comment",
    embedded: false
  },
  {
    name: "Tag",
    embedded: false
  },
  {
    name: "Category",
    embedded: false
  },
  {
    name: "Revision",
    embedded: false
  },
  {
    name: "Report",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
